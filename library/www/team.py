import frappe
def get_context(context):
    doc=frappe.get_all("User",fields=["full_name","email"],filters=[{"enabled":1}])
    print(doc)
    context.title="Our Team"
    context.list=doc
    context.no_cache = True