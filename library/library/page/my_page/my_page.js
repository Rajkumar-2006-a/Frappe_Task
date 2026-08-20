frappe.pages['my_page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Page_testing',
		single_column: true
	});
	page.set_title("Library")
	page.set_title_sub("The Manager")
	page.set_indicator("Pending","blue")
	//page.clear_indic



	//primary button
   let btn1= page.set_primary_action("New",()=>create_one(),'octicon octicon-plus')
	function create_one() {
    console.log("New button clicked");
    }
	let btn2=page.set_secondary_action("Secondary",()=>secondary_func(),'octicon octicon-plus')
   function secondary_func()
   {
	console.log("the secondary button clicked")
   }
//menu items
   page.add_menu_item("Profile",()=>menu_1())
   page.add_menu_item("About",()=>menu_1())
   page.add_menu_item("Contact",()=>menu_1())
   function menu_1()
   {
	console.log("The menu")
   }
   page.add_action_item("Delete",()=>del())
   function del()
   {
	console.log("Successfully deleted")
   }

   //inner button

   page.add_inner_button('new post',()=>new_post(),'Inner')
   function new_post()
   {
	confirm.log("The new post")
   }
  // page.change_inner_button_type('new post',null,danger)
//page.clear_inner_toolbar()
let filed=page.add_field(
	{
		label:'Status',
		fieldtype:'Select',
		fieldname:'status',
		options:["pending","completed"],
		change()
		{
			console.log("The val",field.get_value());
		}
	});
//let val=page.get_from_values
console.log(val)

 page.add_button("Get Route",()=>{
	console.log(frappe.get_route())
 })
}
