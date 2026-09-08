import frappe
import time

def report():
    print("Report generation started")
   # print(param)
    for i in range(1,7):
        print(f"Processing {i}/6")
        time.sleep(5)
    print("completed")
    
def cron_testing():
    frappe.log_error("The cron testing da")