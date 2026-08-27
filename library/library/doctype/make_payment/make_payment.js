
frappe.ui.form.on("Make_Payment", {
	refresh(frm) {
    frappe.db.get_doc("Cart_table",frm.doc.customer_no)
	},
});
