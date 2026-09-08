# Copyright (c) 2026, raj and Contributors
# See license.txt

import frappe
from frappe.tests import IntegrationTestCase


# On IntegrationTestCase, the doctype test records and all
# link-field test record dependencies are recursively loaded
# Use these module variables to add/remove to/from that list
EXTRA_TEST_RECORD_DEPENDENCIES = []  # eg. ["User"]
IGNORE_TEST_RECORD_DEPENDENCIES = []  # eg. ["User"]


class IntegrationTestArticle(IntegrationTestCase):
	def test_article_creation(self):
		article = frappe.get_doc({
			"doctype": "Article",
			"title": "My Test",
			"isPublished": 1
		})
		article.insert()
		
		self.assertEqual(article.title, "My Test")
		
		exists = frappe.db.exists("Article", article.name)
		self.assertTrue(exists)