from frappe.model.document import Document

class AddressMixin(Document):

    @property
    def full_address(self):
        return f"{self.address_line1}, {self.city}, {self.country}"

    def custom_validation(self):
        print("My validation")