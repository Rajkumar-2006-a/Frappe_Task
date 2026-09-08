app_name = "library"
app_title = "library"
app_publisher = "raj"
app_description = "a library management"
app_email = "rajkumar445912@gmail.com"
app_license = "mit"



# app_include_js="assets/library/js/desk.js"

# web_include_js="assets/library/js/web.bundle.js"
# web_include_css="assets/library/css/web_include.css"

# page_js = {
#     "background_jobs": "assets/library/js/custom_background_jobs.js"
# }
# webform_include_js = {
#     "ToDo": "assets/library/js/custom_todo.js"
# }
# before_tests = "library.tests.before_tests"

# export_python_type_annotations=True
# after_migrate = "library.migrate.after_migrate"
# after_build="library.buil.after_build"
# before_migrate="library.migrate.before_migrate"
# update_website_context = "library.website.context.update_context"
# website_path_resolver="library.website.context.resolve_path"

# on_login = "library.api.user_logged_in"
# on_session_creation = "library.api.create_session"
# on_logout = "library.api.logout_user"

 # website_route_rules = [
 #     {
 #         "from_route": "/books/<name>",
 #         "to_route": "books/book"
 #     }
 # ]


# doc_events={
#     "Test_Document":{
#         "validate":"library.api.validate"
#     }
# }


# extend_website_page_controller_context = {
#      "frappe.www.404": "library.www.404"
#  }

# get_web_pages_with_dynamic_routes = "library.dynamic.get_web_pages_with_dynamic_routes"
# # In your_app/hooks.py

website_catch_all = "not_found"

website_clear_cache = "library.cache.clear_website_cache"


send_sms = "library.overrides.sms.send_sms"






send_token_via_sms = "library.overrides.sms.send_token_via_sms"


doc_events={
    "Student":
        {
            "after_insert":"library.welcome_msg.after_the_insert"
        }
}

override_whitelisted_methods = {
    "frappe.client.get_count": "library.api.custom_get_count",
 }

ignore_links_on_delete = ["Link_testing","Student","Course","Admission"]
#base_template = "library/templates/custom_template.html"
# calendars = ["Students","Controllers","ToDo","Doctype"]
extend_doctype_class = {
    "Address": [
        "library.address.extending_address.AddressMixin"
    ]
}

# website_redirects=[
#     {
#         "source":"/help","target":"/info"
#     }
# ]



fixtures=["Shop Order"]


default_mail_footer = """
 <div>
<hr>
<h1>We welcome you </h1>
<h2>Thank </h2>
</div>
"""
# extend_bootinfo="library.api.boot_info"
# before_write_file="library.api.before_write"
# get_sender_details = "library.api.get_sender_details"
# signup_form_template = "library/templates/custom_template.html"
jinja = {
    "methods": [
        "library.jinja.methods"
    ],
    "filters":["library.jinja.filters"]
}

additional_timeline_content={
    "Student":["library.api.timeline"]
}

brand_html = '<div><img src="assets/library/images/VJ.jpg ">TN</div>'
app_logo_url="assets/library/images/VJ.jpg"
# notification_config = "library.api.get_config"


# task
# scheduler_events={
#     "daily":["library.task.daily_maintenance"],
#     "cron":{
#         "* * * * *":["library.background.cron_testing"]
#     }
# }
