from frappe.model.document import Document
import frappe

class Vitual_testing(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        age: DF.Int
        amended_from: DF.Link | None
        email: DF.Data | None
        firstname: DF.Data | None
        lastname: DF.Data | None
        name: DF.Int | None
    # end: auto-generated types

    
    def full_name(self):
        return f"{self.firstname or ''} {self.lastname or ''}".strip()
    
    def validate(self):
        if self.age<18:
            frappe.throw("Age is small")
    
    def after_insert(self):
          frappe.msgprint("Sorry da loki")