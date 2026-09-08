//frappe.ui.form.on("Library Member",{
//     // refresh(frm)
//     // {
//    //frappe.msgprint("Hello",title="Hello from "+frm.doc.member_name);
//     // frm.set_value("member_name","Vijay")
//     //       frm.set_value("email","rajkumar.cs23@bitsathy.ac.in").then(()=>{
//     //         console.log("executed the promise")
//     //     }
//     //     )
//     //  },
//     // setup(frm)
//     // {
//     //  frm.set_value("member_name","Vijay")
//     // },
// before_load(frm) {
//     console.log("Executed the before load");
    
//     frm.set_query("link", () => {
//         return {
//             filters: {
//                 year: ['>=','1']
//             }
//         };
//     });

//     frm.call("call", { throw_is_missing: true }).then(r => {
//         console.log(r);
//     });

//     let dialog = new frappe.ui.Dialog({
//         title: 'Set Due Date',
//         fields: [
//             {
//                 fieldtype: 'HTML',
//                 fieldname: 'my_control_html'
//             }
//         ]
//     });

//     dialog.show();

    

//     let $wrapper1 = $('<div class="my-control"></div>').appendTo(dialog.body);
// let control = frappe.ui.form.make_control({
//     parent: $wrapper1,
//     df: { label: 'Due Date', fieldname: 'due_date', fieldtype: 'Date' },
//     render_input: true
// });
// control.refresh();

// //let $wrapper2 = $('<div class="my-control-2"></div>').appendTo(dialog.body);
// let ctl2 = frappe.ui.form.make_control({
//     parent: $wrapper1,
//     df: { label: 'Rate your experience', fieldname: 'rating', fieldtype: 'Rating' },
//     render_input: true
// });
// ctl2.refresh();



//     // onload(frm)
//     // {
//     //     console.log("Executed the on load");
//     // },
//     // after_save(frm)
//     // {
//     //     console.log("after save executed");
//     // },
//     // email(frm)
//     // {
//     //     console.log("The values are changed",frm.doc.email)
//     //     frm.set_value("email","rajkumar.cs23@bitsathy.ac.in").then(()=>{
//     //         console.log("executed the promise")
//     //     }
//     //     )
//     // },

//     get_email_recipients(frm, field) {
//         console.log("The field is:", field);
//         if (field === "recipients" || field=="bcc" ) {
//             return ["rajkumar.cs23@bitsathy.ac.in","lokesh.cs23@bitsathy.ac.in"];
//         }
//     },
    
//    get_email_recipient_filters(frm, field) {
//     if (field === "recipients") {
//         return [
//             ["Contact", "status", "=", "replied"]
//         ];
//     }
// },



//      refresh(frm)
//       {
//         //frm.add_custom_button("Save Document", () => {
//           //  frm.set_value("price","100")
//         // if(frm.is_dirty())
//         // {
//         //     frappe.show_alert("The form is not saved")
//         // }
//         // else
//         // {
//         //     frappe.show_alert("Thanks")
//         // }
//       //  frm.save('Submit');
//         //});
//         // frappe.add_custom_button("New",()=>{
//         //             console.log("The is_new is working")
//         //         }
//         //     if(frm.is_new())
//         //     {
//         //         console.log("This is the new doc")
                
//         //     }
        
        
   
//     //   frm.email_doc(`Hello ${frm.doc.member_name}`);
//     //    console.log("refresh executed")
//     //    frm.refresh_field('price');
//     frm.set_intro("hello","orange")

//     },
// //   price(frm)
// //     {
// //  if(Number(frm.doc.price)< 100)
// //         {
// //             frm.disable_save();
// //         }
// //         else{
// //             frm.enable_save();
// //         }
// //     }
   
// });

// frappe.ui.form.on("Library Member",{
//     refresh(frm)
//     {
//         frm.add_custom_button("Test",()=>{
//             console.log("The button executed");
//         })
//         frm.change_custom_button_type("Test",null,"success")
//         if(Number(frm.doc.price)<100)
//         {
//             frm.remove_custom_button("Test")
//            // frm.toggle_display("price",false)
//         }
//         else
//         {
//             console.log("Not able to dsiplay")
//         }
        
//     }
// })
