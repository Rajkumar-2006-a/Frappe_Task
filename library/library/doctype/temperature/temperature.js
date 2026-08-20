
frappe.ui.form.on("Temperature", {
refresh(frm) 
{
        frm.add_custom_button("qr",()=>
        {
             new frappe.ui.Scanner({
            dialog: true,
            multiple: false,
            on_scan(data) {
                console.log("Scanned value:", data.decodedText);
                frm.set_value("qr",data.decodedText);
        }
        })
      })
     frm.add_custom_button("call",()=>
    {
        //frappe.call("library.api.jax").then(r=>{console.log(r.message)})
        //frappe.db.get_value("Library Member","MEM-13",['member_name','email']).then(r=>{console.log(r.message.email);
        //console.log(r.message.member_name)})

        frappe.db.get_list("Library Member",{fields:['member_name','email'],filters:{"status":"Active"}}).then(r=>console.log(r))
    })
   
      
}
})