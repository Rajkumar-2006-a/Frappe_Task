import frappe
def get_context(context):
    doc=frappe.get_list("Article",filters={"ispublished":1},fields=["title", "name"])
    context.art=doc