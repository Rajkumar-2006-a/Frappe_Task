# Copyright (c) 2026, raj and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Make_Payment(Document):
    def after_save(self):
        if self.status:
            balance = self.balance or 0;
            total = self.total_price or 0;
            if balance==total:
                self.status="Not Paid"
        elif balance==0:
            self.status="Fully Paid"
        else:
            self.status="Partialy Paid"
