frappe.ui.form.on("Customer",{
    refresh(frm)
    {
        frm.add_custom_button("the newly",()=>
        {
        console.log(frappe.get_route())
        })

        frm.add_custom_button("TO route",()=>
        {
            frappe.set_route(['Form','Customer','CUS-003'])
        })

        let res=frappe.format("20-05-2006",{fieldtype:'Date'})
        let res1=frappe.format("15000",{fieldtype:'Currency'})
       // console.log(res1)
    },

    onload(frm)
    {
    let d=new frappe.ui.Dialog({
    title:'Enter the Details',
    fields:[
        {
            label:'Name',
            fieldtype:'Data',
            fieldname:'name'
        },
       {
            label:'Age',
            fieldtype:'Int',
            fieldname:'age'
        },
         {
            label:'Department',
            fieldtype:'Data',
            fieldname:'department'
        }
        ],
        size:'large',
        primary_action_label:'Hello',
         primary_action(values) {
           console.log(values);
           d.hide();
        }
    });
    
   // d.show()
    // frappe.msgprint({
    //     title:'Notification',
    //     indicator:'red',
    //     message:'Document updated successfully'
    // })

    //single prompt

    // frappe.prompt("Goal",({value})=>
    // {
    //     console.log(value)
    // })utton

    //set title and name of submit b

    // frappe.prompt(
    // 'First Name',
    // console.log,
    // 'Enter First Name',
    // 'save'
    //   )
    
    // multiple value

    // frappe.prompt([
    //     {
    //     label:'First Name',fieldtype:'Data',fieldname:'first_name'
    //     },
    //     {
    //     label:'Lastt Name',fieldtype:'Data',fieldname:'last_name'
    //     },
    //  ],(values)=>{
    //     console.log(values.first_name)
    //  })
    
    // frappe.confirm("Are sure to delete",
    //     ()=>{console.log("Deleted")},
    //     ()=>{console.log("Failed")}
    // )


   //frappe.warn("Are you sure to continue","there are some risk",()=>{console.log("the user clicked go")},'next')
   
   
   //frappe.new_doc("Library Member",{email:'rajkumar.cs23@bitsathy.ac.in'})
   //can also add callback frappe.new_doc("Library_mem",{},(doc)=>{})

//     let tab=new frappe.ui.Dialog(
//         {
//             title:'Table View',
//             fields:[
//                 {
//                 label:'Students',
//                 fieldtype:'Table',
//                 fieldname:'table_view',

//                 fields:[
//                     {
//                     fieldtype:'Data',
//                     fieldname:'First Name',
//                     in_list_view:1,
//                     label:'FS Name'
//                     },
//                       {
//                     fieldtype:'Data',
//                     fieldname:'Last Name',
//                     in_list_view:1,
//                     label:'LS Name'
//                     }
//                ]
//                 }
//             ],
//             primary_action(values)
//             {
//                 console.log(values)
//             },
//             primary_action_label:'Save'
//         }
//     )
//    tab.show()


}
})