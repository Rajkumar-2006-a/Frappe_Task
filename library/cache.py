import frappe

def clear_website_cache(path=None):
    if path:
        # Printed when cache is cleared for a specific page route
        print(f"=== Clearing website cache for route: {path} ===")
    else:
        # Printed when all website cache is cleared
        print("=== Clearing all website cache ===")
        
    # Clear Frappe's built-in website route cache
    frappe.cache().delete_keys("website_routes")