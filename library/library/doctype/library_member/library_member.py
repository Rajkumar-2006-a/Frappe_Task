import frappe
from frappe.model.document import Document
import time
from frappe.utils import now

class LibraryMember(Document):

    def after_insert(self):
        print("Run testing")
        frappe.publish_realtime(
            "new_member",
            {
                "name": self.member_name,
                "email": self.email,
                "time":now()
            }
        )

        frappe.publish_progress(
            90,
            title="Processing",
            description="90% completed"
        )
   # def validate(self):
        #frappe.msgprint("Hello",wide=True,is_minimizable=True)
        # frappe.msgprint(msg=["hello","raj"],title="Please check",as_list=True)  
        # frappe.msgprint(msg=[["raj","30"],["Arun","56"]],as_table=True,title="Member")
        # frappe.msgprint(
        # msg="Member has been created.",
        # title="Library Member",
        # primary_action={
        #     "label": "Show Details",
        #     "server_action": "library.api.show_member_details",
        #     "args":{
        #         "name":self.name,
        #         "email":self.email
        #     }
        # }
        # )
    def do_something(self, param):
        print(f"Student: {self.name}")
        print(f"Parameter: {param}")
        time.sleep(20)
        print("Task completed!")

    def send_welcome_email(self, message):
        frappe.sendmail(
            recipients=[self.email],
            subject="Welcome to the Library",
            message=message
        )
    @frappe.whitelist()
    def call(self):
        return {
        "hello"
        }
