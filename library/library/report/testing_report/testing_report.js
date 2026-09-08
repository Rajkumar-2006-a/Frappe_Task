frappe.query_reports["Shop_report"] = {
    filters: [
         {
            "label": "Customer Name",
            "fieldtype": "Link",
            "options": "Shop Customer", 
            "fieldname": "customer"
         }
    ],
};