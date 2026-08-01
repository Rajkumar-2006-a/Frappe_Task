# Copyright (c) 2026, raj and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Type_annotation(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		age: DF.Int
		amended_from: DF.Link | None
		name1: DF.Data | None
	# end: auto-generated types

	pass
