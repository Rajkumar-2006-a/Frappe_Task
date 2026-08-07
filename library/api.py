import frappe

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
    return "OK"
def boot_info(bootinfo):
    bootinfo.name="RAji"
    
def before_write():
    console.log("hello")
    frappe.throw("Before Write Hook Executed")
def write_file():
    frappe.throw("write File Hook Executed")

def get_sender_details():
    return "Raj", "rajkumar.cs23@bitsathy.ac.in"
import frappe

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
  
  