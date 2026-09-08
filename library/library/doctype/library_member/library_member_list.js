// frappe.listview_settings["Library Member"] = {
//     filters: [
//         ["price", ">", "100"]
//     ],
//     hide_name_column: true,
//     onload(listview) {
//         console.log("hello");
//     },
//     button: {
//         show(doc) {
//             return doc.status == "Active";
//         },
//         get_label()
//         {
//            return 'See Details'
//         },
//         get_description(doc) {
//             return __('View {0}', [`${doc.member_name}`]);
//         },
//         action(doc) {
//             frappe.set_route("Form", "Library Member", doc.name);
//         }
//     },
//     formatters: {
//         price(val) {
//             return `<span>The price is₹ ${val}</span>`;
//         }
//     },

//   dropdown_button:
//   {
//    get_label:__("Menu"),
//    buttons:[
//     {get_label:__("Option 1"),show:(doc)=>{return true}},
//      {get_label:__("Option 2"),show:(doc)=>{return true}},

//    ]
//   },
//   primary_action()
//   {
//     console.log("The primary action is executed")
//   }
// };