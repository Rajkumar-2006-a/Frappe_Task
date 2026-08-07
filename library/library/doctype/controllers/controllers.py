# Copyright (c) 2026, raj and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Controllers(Document):
    #run before the insert into DB
    def before_insert(self):
        self.status="Active"
        print("hello")
        frappe.msgprint("Before insert executed")
    #run before the validation to set the default mark
    def before_validate(self):
        self.mark="40"
        frappe.msgprint("The before validate executed")
    # run before the naming of the record
    def before_naming(self):
        self.department=self.department
        frappe.msgprint("Before name executed")
    #the naming series autoname
    def autoname(self):
        self.name = f"{self.department}"
    # validate the age ,stop the save flow when the age is < 18
    def validate(self):
        frappe.msgprint("The validate is also done")
    #run after the success of validation       
    def before_save(self):
        self.student_name = self.student_name
        frappe.msgprint("The before save")
    def after_insert(self):
        frappe.msgprint("The after_insert is done")
    #once before submit
    def before_submit(self):
        frappe.msgprint("The before submit is done")
    #after evry save
    def on_update(self):
        frappe.msgprint("the update is done")
    #after submit
    def on_submit(self):
        frappe.msgprint("the on_submit executed")
    #before the cancel
    def before_cancel(self):
        if self.graduation == "be":
            frappe.throw("Graduated students cannot be cancelled")
    #after cancel
    def on_cancel(self):
        frappe.msgprint("Admission cancelled")
    def before_update_after_submit(self):
        frappe.msgprint("About to update submitted student")
    def on_update_after_submit(self):
        print("Submitted student updated")
    #
    def before_rename(self, old, new, merge=False):
        frappe.msgprint(f"Renaming document from '{old}' to '{new}'")
    #runs before deletring or being deleted the record
    def on_trash(self):
        if self.trash == "G":
            frappe.throw("Cannot delete because the trash is G")
    #runs after deleting the record
    def after_delete(self):
        frappe.msgprint("Running after  deleted the record")