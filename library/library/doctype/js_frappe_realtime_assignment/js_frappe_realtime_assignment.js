frappe.ui.form.on("js_frappe_realtime Assignment", {

    refresh(frm) {

        let d = new frappe.ui.Dialog({

            title: "Enter the Details",

            fields: [
                {
                    fieldname: "firstname",
                    fieldtype: "Data",
                    label: "First Name"
                }
            ],

            primary_action(values) {

                let fn = values.firstname;

                d.hide();

                frappe.route_options = {
                    first_name: fn
                };

                 frappe.new_doc("Contact")
            },
        
         primary_action_label: "Submit"
        });

        d.show();
    }

});

