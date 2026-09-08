import frappe
from library.overrides.sms import send_sms
def after_the_insert(self,method):
    frappe.msgprint("Welcome You")
    send_sms(receiver_list="+916380532229", msg="sms_appointment_reminders")