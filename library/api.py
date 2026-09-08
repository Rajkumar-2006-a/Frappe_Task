import frappe
import time
import random
from frappe.query_builder import DocType
from frappe.utils.logger import set_log_level 
def user_logged_in(login_manager):
    frappe.logger().info(f"{login_manager.user} logged in")

def create_session(login_manager):
    frappe.msgprint("Welcome to Library")
def logout_user(login_manager):
    frappe.logger().info(f"{login_manager.user} logged out")
    
def validate(self,method):
    frappe.msgprint("Hook Executed")
    
    
    
@frappe.whitelist()
def custom_get_count(doctype, filters=None, debug=False, cache=False):
    print("Custom get_count executed")
    return 999

@frappe.whitelist()
def hello():
    print(frappe.form_dict)
    return "The whitelist executed"

def boot_info(bootinfo):
    bootinfo.name="RAji"
    
def before_write():
    console.log("hello")
    frappe.throw("Before Write Hook Executed")
def write_file():
    frappe.throw("write File Hook Executed")

def get_sender_details():
    return "Raj", "rajkumar.cs23@bitsathy.ac.in"
def timeline(doctype, docname):

    doc = frappe.get_doc(doctype, docname)

    return [{
        "creation": frappe.utils.now(),
        "icon": "heart",
        "content": f"""
        <div>
            <b>Supplier :</b> {doc.student_name}<br>
            <b>Total :</b> ₹{doc.year}<br>
            <b>Status :</b> {doc.department}
        </div>
        """
    }]
    
@frappe.whitelist()
def query():

    customer = frappe.qb.DocType("Customer")
    course = frappe.qb.DocType("Course")

    qry = (
        frappe.qb.from_(customer)
        .inner_join(course)
        .on(course.customer_name== customer.name)
        .select(
            customer.name,
            customer.customer_name,
            course.course_name,
            customer.year,
            customer.status
        )
        
    )

    result = qry.run(as_dict=True)
    print("hello")
    doc=frappe.get_doc("Customer",result[0]["name"])
    print(doc.as_dict())
    doc.year="3"
    doc.save()
    print(doc.as_dict())
    for i in result:
        frappe.db.set_value("Customer",i["name"],"status","Active")
    result = qry.run(as_dict=True)
    if not result:
        return {
            "message": "No record",
            "result": []
        }

    return {
        "message": "Records found",
        "result": result
    }
  

@frappe.whitelist()
def show_member_details():
    time.sleep(3)
    frappe.msgprint("3 seconds completed")
    return "hello"
@frappe.whitelist()
def testing():
    doc=frappe.qb.DocType("Library Member")
    query=(frappe.qb.from_(doc).select(doc.member_name).where(
        (doc.member_name=="Rajkumar")&
        (doc.email=="rajkumar.cs23@bitsathy.ac.in")
        )
    )
    result=query.run()
  
    return result
    
@frappe.whitelist()
def task_todo():
    doc=frappe.get_list("Library Member",fields=["name","member_name"],order_by="member_name asc",limit=5)
    record=[]
    for i in doc:
        email=frappe.db.get_value("Library Member",i.name,"email")
        dic={
            "name":i.member_name,
            "email":email,
            "time":frappe.utils.now()
        }
        record.append(dic)
    return record

@frappe.whitelist()
def send_temperature():
    temperature = random.randint(20, 40)

    data = {
        "label": frappe.utils.now_datetime().strftime("%H:%M:%S"),
        "points": [temperature]
    }

    frappe.publish_realtime("temperature_event", data)

    return data
@frappe.whitelist()
def jax():
    return {
        "message":"hello"
    }
@frappe.whitelist()
def logger():
    log=frappe.logger("testing_logger")
    log.debug("The debug is executed")
    log.info("The debug is executed")
    log.warning("The warning")
    return "executed"
@frappe.whitelist()
def level(level):
    set_log_level(level)
    return f"Log level changed to {level}"

@frappe.whitelist()
def frappe_call(msg):
    doc=frappe.new_doc("Task_frappe_call")
    doc.subject=msg
    doc.save()
    return doc.name
@frappe.whitelist()
def creator(user_name,user_city,user_mobile):
    doc=frappe.get_doc({"doctype":"Client","customer_name":user_name,"city":user_city,"mobile":user_mobile})
    doc.save()
    return "done"
