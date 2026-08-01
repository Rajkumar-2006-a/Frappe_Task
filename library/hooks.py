app_name = "library"
app_title = "library"
app_publisher = "raj"
app_description = "a library management"
app_email = "rajkumar445912@gmail.com"
app_license = "mit"


app_include_js="/assets/library/js/custom.js"

webform_include_js = {"ToDo": "assets/library/js/custom_todo.js"}
export_python_type_annotations=True
after_migrate = "library.migrate.after_migrate"
after_build="library.buil.after_build"
before_migrate="library.migrate.before_migrate"
update_website_context = "library.website.context.update_context"
website_path_resolver="library.website.context.resolve_path"

on_login = "library.api.user_logged_in"
on_session_creation = "library.api.create_session"
on_logout = "library.api.logout_user"
home_page = "desk"
website_route_rules = [
    {
        "from_route": "/books/<name>",
        "to_route": "books/book"
    }
]
web_include_js="/assets/library/js/website.bundle.js"

homepage="info"

standard_portal_menu_items = [
    {"title": "Dashboard", "route": "/dashboard", "role": "Website Manager"},
    {"title": "Orders", "route": "/orders", "role": "Website Manager"},
]


