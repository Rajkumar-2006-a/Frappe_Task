def update_context(context):
    print("Hook Executed")
    context.company = "ABC Library"
    context.year = 2026




import frappe

def resolve_path(path):
    
    if path == "profile":
        frappe.log_error("Changing profile to me", "Path Resolver")
        return "me"

    return path