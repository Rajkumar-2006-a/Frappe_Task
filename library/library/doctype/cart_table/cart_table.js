
frappe.ui.form.on("Item_Table",{
    
    quantity(frm,cdt,cdn)
     {
    
         let row=frappe.get_doc(cdt,cdn);
         row.bill_price=row.quantity*row.price;
         calculate(frm)
         frm.refresh_field("bill");
    
     },
     bill_remove(frm)
     {
        calculate(frm)
     },
    before_bill_remove(frm, cdt, cdn)
    {
    let row = locals[cdt][cdn];
    stock_update(row);
    }
})
frappe.ui.form.on("Cart_Table",{
    
    total_price(frm)
    {
    coupon(frm)
    },
    coupon_code(frm)
    {
        if(frm.doc.coupon_code.length==7)
        {
         coupon(frm)
        }
        else{
            frm.set_value("amount",frm.doc.total_price)
            frm.set_value("balance",frm.doc.total_price)
        }
    },
    customer_no(frm)
    {
        if(frm.doc.customer_no.length==10)
        {
        console.log(frm.doc.customer_no)
        frappe.db.get_list("Client",{
            fields:["customer_name","mobile",'city'],
            filters:{mobile:frm.doc.customer_no}
        }).then(r=>{
            if(r.length==0)
            {
                frappe.show_alert({message:'No mobile found',indicator:'red'},5)
                frm.set_df_property('create', 'hidden', 0);
                record_creator(frm)
              return;
            }
          
            frm.set_value('customer_name',r[0].customer_name)
            frm.set_value('customer_address',r[0].city)

        })
        }
        else
        {
          
             frm.set_df_property('create', 'hidden', 1);
             frm.set_value('customer_name','')
            frm.set_value('customer_address','')
    
        }
    },

})
function calculate(frm)
{
   let tot=0;
    for(let i=0;i<frm.doc.bill.length;i++)
    {
      let row =frm.doc.bill[i];
      tot+=row.bill_price;
    }
    let dis=0
    frm.set_value('total_price',tot)
    

    // if(tot >= 1000)
    // {
    //     dis=tot-(tot*0.10)
    //     frm.set_value('amount',dis)
    // }
    // else
    // {
      //frm.set_value('total_price',tot)
     frm.set_value('amount',tot)
     frm.set_value('balance',tot)
    // }
}
function coupon(frm)
{
     
     let tot=0;
    for(let i=0;i<frm.doc.bill.length;i++)
    {
      let row =frm.doc.bill[i];
      tot+=row.bill_price;
    }
   
    frappe.db.exists("Coupon",frm.doc.coupon_code).then(r=>{
    if(r)
    {
    frappe.db.get_doc("Coupon",frm.doc.coupon_code).then(r=>{
        if(r.active)
        {
             if(r.minimum_price<tot)
             {
                  dis=tot-(tot*(r.percentage/100))
                  console.log(dis)
                  frappe.show_alert("Discount applied")
                  frm.set_value('amount',dis)
                  frm.set_value('balance',dis)
             } 
             else if(tot<r.minimum_price)
             {
                frappe.show_alert("The minimum amount is "+ r.minimum_price)
                frm.set_value("coupon_code",'')
             }
             else
             {
                frappe.show_alert("Invalid coupon code")
                 frm.set_value("coupon_code",'')
             }
        }
        else
        {
            frappe.show_alert("The coupon is expired")
            frm.set_value("balance",frm.doc.total_price)
            frm.set_value("coupon_code",'')
        }

    })
     }
     else
     {
        frappe.show_alert("Invalid coupon");
         frm.set_value("coupon_code",'')
     }
    })
}
function stock_update(row) {

    console.log("Stock updated executed");

    frappe.db.get_doc("Product", row.product_id)
        .then(product => {

            product.quantity += row.quantity;

            return frappe.call({
                method: "frappe.client.save",
                args: {
                    doc: product
                }
            });

        });
}

function record_creator(frm)
{
frappe.ui.form.on("Cart_Table",{
    create(frm)
    {
        d=new frappe.ui.Dialog({
            message:"Enter the details",
            fields:[{
             fieldtype:"Data",
             fieldname:"cus_name",
             label:"Customer Name"
            },
            {
          fieldtype:"Data",
          fieldname:"cus_city",
          label:"City"  
           },
           {
            fieldtype:"Data",
            fieldname:"cus_mobile",
            label:"Mobile Number"
           }],
    
           primary_action_label:"Create",
           primary_action(values)
           {
            d.hide()
            frappe.call({
                method:"library.api.creator",
                args:{user_name:values.cus_name,user_city:values.cus_city,user_mobile:values.cus_mobile},
                callback:()=>{
                    console.log("Created a user successfully")
                    frm.reload_doc();
                    frm.refresh();
                    frappe.db.get_list("Client",{
                    fields:["customer_name","mobile",'city'],
                    filters:{mobile:frm.doc.customer_no}
                    }).then(r=>{
                        frm.set_value('customer_name',r[0].customer_name)
                        frm.set_value('customer_address',r[0].city)
                    })
                }
            })
            
           }
        })
        d.show()
        d.set_df_property("cus_mobile","read_only",1)
        d.set_value("cus_mobile",frm.doc.customer_no)
    }
})
}

frappe.ui.form.on("Cart_Table", {
    refresh(frm) {
        //frm.set_df_property("bill", "cannot_add_rows", true);

        frm.add_custom_button(__("Add Items"), () => {
            frappe.db.get_list("Product", {
                fields: ["name", "product_name", "quantity", "price"],
                filters: { quantity: [">", 0] },
                limit: 100
            }).then(products => 
                {
                let d = new frappe.ui.Dialog({
                    title: "Select Items",
                    fields: [{ fieldname: "item_table", fieldtype: "Table" }],
                    primary_action_label:"Add Items",
                    primary_action()
                    {
                        console.log("Hello")
                        d.show()
                    }
                    // primary_action() {
                    //     let selected = false;

                    //     d.$wrapper.find(".product-check:checked").each(function () {
                    //         let idx = $(this).data("index");
                    //         let product = products[idx];
                    //         let req_qty = flt(d.$wrapper.find(`.product-qty[data-index="${idx}"]`).val());

                    //         if (req_qty <= 0 || req_qty > product.quantity) {
                    //             frappe.msgprint(__('Invalid quantity for {0}', [product.product_name]));
                    //             return;
                    //         }

                    //         selected = true;
                    //         let existing_row = (frm.doc.bill || []).find(r => r.product_id === product.name);

                    //         if (existing_row) {
                    //             let total_qty = flt(existing_row.quantity) + req_qty;
                    //             frappe.model.set_value(existing_row.doctype, existing_row.name, {
                    //                 quantity: total_qty,
                    //                 bill_price: total_qty * flt(existing_row.price)
                    //             });
                    //         } else {
                    //             let row = frm.add_child("bill", {
                    //                 product_id: product.name,
                    //                 product_name: product.product_name,
                    //                 price: product.price,
                    //                 quantity: req_qty,
                    //                 bill_price: req_qty * flt(product.price)
                    //             });
                                  
                    //         }
                    //     });

                    //     if (!selected) {
                    //         frappe.msgprint(__("Please select at least one valid product."));
                    //         return;
                    //     }

                    //     frm.refresh_field("bill");
                    //     calculate(frm);
                    //     d.hide();
                    // }
                });

                // let table_rows = products.map((p, idx) => `
                //     <tr>
                //         <td><input type="checkbox" class="product-check" data-index="${idx}"></td>
                //         <td>${p.name}</td>
                //         <td>${p.product_name}</td>
                //         <td>${p.price}</td>
                //         <td>${p.quantity}</td>
                //         <td>
                //             <input type="number" class="form-control product-qty" data-index="${idx}" value="3" min="1" max="${p.quantity}">
                //         </td>
                //     </tr>
                // `).join("");

                // d.fields_dict.item_table.$wrapper.html(`
                //     <div style="max-height: 350px; overflow-y: auto;">
                //         <table class="table table-bordered table-condensed">
                //             <thead>
                //                 <tr>
                //                     <th></th>
                //                     <th>${'ID'}</th>
                //                     <th>${'Name'}</th>
                //                     <th>${'Price'}</th>
                //                     <th>${'Available'}</th>
                //                     <th style="width: 100px;">${'Qty'}</th>
                //                 </tr>
                //             </thead>
                //             <tbody>${table_rows}</tbody>
                //         </table>
                //     </div>
                // `);
                
                d.show();
            });
        });
        if(frm.doc.balance>0 )
        {
            frm.add_custom_button("Make Payment",()=>
            {
            doc=frappe.new_doc("Make_Payment",{
            "customer_no":frm.doc.customer_no
            })
            console.log("The payment is successful")
            })
             if(frm.doc.status=='Fully Paid')
            {
                frm.remove_custom_button('Make Payment');
            }
        }

    },


});
