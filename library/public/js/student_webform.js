frappe.ready(() => {
    console.log("Student Web Form Loaded");

    const first_name = document.querySelector('[data-fieldname="firstname"]');

    if (first_name) {
        first_name.style.backgroundColor = "yellow";
    }
});