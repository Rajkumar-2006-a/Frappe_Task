frappe.treeview_settings["Hierachy"]={
    breadcrum:"Hierachy",
    title: "Chart of Accounts",
    menu_items:["hello","New Child"],
    fields: [
		{
			fieldtype: "Data",
			fieldname: "account_name",
			label: "New Account Name",
			reqd: true,
		},
		{
			fieldtype: "Link",
			fieldname: "account_currency",
			label: "Currency",
			options: "Currency",
		},
		{
			fieldtype: "Check",
			fieldname: "is_group",
			label: "Is Group",
		},
        
	],
}