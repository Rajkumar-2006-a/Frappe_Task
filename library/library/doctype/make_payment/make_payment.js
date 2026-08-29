var id;

frappe.ui.form.on("Make_Payment", {
    onload(frm) {
        // If it's an existing document, load the id directly from the document
        if (!frm.is_new()) {
            id = frm.doc.name;
            return;
        }

        if (!frm.doc.customer_no) {

            return;
        }

        frappe.db.get_list("Cart_Table", {
            filters: {
                customer_no: frm.doc.customer_no,
                balance: [">", 0]
            },
            fields: [
                "name",
                "customer_no",
                "customer_address",
                "customer_name",
                "amount",
                "total_price",
                "balance",
                "coupon_code"
            ],
            limit: 1
        }).then(r => {
            if (r && r.length > 0) {
                let cart = r[0];

                // Assign name to both the persistent doc field and the variable 'id'
                id = cart.name;
                frm.set_value("customer_no", cart.customer_no);

                frm.set_value("customer_address", cart.customer_address);
                frm.set_value("customer_name", cart.customer_name);
                frm.set_value("amount", cart.amount);
                frm.set_value("total_price", cart.total_price);
                frm.set_value("balance", cart.balance);
                frm.set_value("coupon_code", cart.coupon_code);

                // Fetch child table rows
                frappe.db.get_doc("Cart_Table", cart.name).then(cart_doc => {
                    frm.clear_table("bill");
                    if (cart_doc.bill) {
                        cart_doc.bill.forEach(element => {
                            let row = frm.add_child("bill");
                            row.product_id = element.product_id;
                            row.product_name = element.product_name;
                            row.price = element.price;
                            row.quantity = element.quantity;
                            row.bill_price = element.bill_price;
                        });
                        frm.refresh_field("bill");
                    }
                });
            }
        });
    },

    before_save(frm) {

        // Negative value validation
        if (frm.doc.amount_to_be_paid < 0) {
            frappe.throw("Negative Values not allowed");
        }
        if(frm.doc.amount_to_be_paid>frm.doc.balance)
        {
             frappe.throw("The amount must be less than balance");
        }
        

        // Existing functionality
        let base_total = flt(frm.doc.balance);
        let paid = flt(frm.doc.amount_to_be_paid);

        let remaining_balance = base_total - paid;

        console.log(id);


        frappe.db.set_value(
            "Cart_Table",
            id,
            "balance",
            remaining_balance
        ).then(r => {

            console.log("Success");

        });


        frm.set_value("balance", remaining_balance);

        // frm.set_value("amount_to_be_paid", "");
    }

});