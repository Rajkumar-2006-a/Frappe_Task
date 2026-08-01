import frappe

def get_context(context):
    book_name = frappe.form_dict.name

    context.title = book_name
    context.description = f"This is the page for {book_name}"