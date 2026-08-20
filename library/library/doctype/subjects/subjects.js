frappe.ui.form.on("Subjects",{
refresh(frm)
{
console.log("Hello da bad")
}
})
frappe.ui.form.on("Grade", {
    grade(frm, cdt, cdn) {
        let row = frappe.get_doc(cdt, cdn);
        console.log(row.subject_name);
    }
});

frappe.ui.form.on("Subjects",{
    email(frm)
    {
    console.log("the value changed",frm.doc.email)
    },
    onload(frm)
    {
        frm.add_child("grade",{
            "mark":"580",
            "grade":"C"
        })
       // frm.refresh_field('grade');
    }
})