frappe.ui.form.on("Task_frappe_call", {
refresh(frm)
{
let d=new frappe.ui.Dialog({
    title:"Task_Subject",
    fields:[{
        fieldname:"subject",
        fieldtype:"Data",
        label:"Subject Name"
    }],
    primary_action(r)
    {
      console.log(r.subject);

      frappe.call({
        method:"library.api.frappe_call",
       args: {msg: r.subject},
       callback:(r)=>
        {
        frappe.msgprint({
        title:"Success",
        message:"The data is submitted successfully",
        indicator:"green"
               })
        }
      })
        d.hide();
    
    },
    primary_action_label:"Submit"
});
d.show()
},
});
