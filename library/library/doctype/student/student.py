# Copyright (c) 2026, raj and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Student(Document):
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

        