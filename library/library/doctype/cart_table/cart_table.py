import frappe
from frappe.model.document import Document
from frappe.utils import cint

class Cart_Table(Document):

    def before_save(self):
        old_doc = self.get_doc_before_save()

        for row in self.bill:

            if not row.product_id:
                continue

            product = frappe.get_doc("Product", row.product_id)

            old_quantity = 0

            if old_doc:
                for old_row in old_doc.bill:
                    if old_row.name == row.name:
                        old_quantity = old_row.quantity
                        break

            difference = row.quantity - old_quantity

            if difference > 0:

                if product.quantity < difference:
                    frappe.throw("Not enough quantity available")

                product.quantity -= difference

            elif difference < 0:

                product.quantity += abs(difference)

            product.save()
            
    def on_trash(self):
        doc=frappe.get_doc("Cart_Table",self.name)
        sum=0
        for i in doc.bill:
            sum+=i.quantity
            cur = frappe.get_doc("Product",i.product_id)
            cur.quantity+=i.quantity
            cur.save()
        print(sum)
        
    def validate(self):
        self.set_payment_status()

    def set_payment_status(self):
        balance = cint(self.balance)
        total = cint(self.total_price)

        if balance == total:
            self.status = "Pending"
        elif balance == 0 and total > 0:
            self.status = "Fully paid"  
        elif 0 < balance < total:
            self.status = "Partially Paid"
        else:
            self.status = "Pending"
        