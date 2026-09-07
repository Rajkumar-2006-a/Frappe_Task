import frappe
def execute(filters: dict | None = None):
    columns = get_columns()
    data = get_data(filters)
    return columns, data
def get_columns() -> list[dict]:
    return [
        {"label": "Customer", "fieldname": "customer", "fieldtype": "Link", "options": "Shop Customer", "width": 150},
        {"label": "Product Category", "fieldname": "product_category", "fieldtype": "Data", "width": 150},
        {"label": "Unit Price", "fieldname": "unit_price", "fieldtype": "Currency", "width": 150}
    ]
def get_data(filters: dict | None = None) -> list[dict]:
    sql = """
        SELECT
            parent.customer,
            child.product_category,
            child.unit_price
        FROM
            `tabShop Order` parent
        INNER JOIN
            `tabshop_order_item` child ON child.parent = parent.name
        WHERE 1=1
    """
    if filters and filters.get("customer"):
        sql += " AND parent.customer = %(customer)s"
    return frappe.db.sql(sql, filters, as_dict=True)