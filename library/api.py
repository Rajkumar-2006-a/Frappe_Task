import frappe

def user_logged_in(login_manager):
    frappe.logger().info(f"{login_manager.user} logged in")

def create_session(login_manager):
    frappe.msgprint("Welcome to Library")
def logout_user(login_manager):
    frappe.logger().info(f"{login_manager.user} logged out")
    
