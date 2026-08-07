import pyotp
import frappe
from frappe import _
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException

def send_sms(receiver_list, msg, sender=None, success_msg=True):

    # Twilio credentials
    account_sid = frappe.conf.get("twilio_account_sid")
    auth_token = frappe.conf.get("twilio_auth_token")
    twilio_number = frappe.conf.get("twilio_phone_number")

    # Create Twilio client
    client = Client(account_sid, auth_token)

    # Convert single number to list
    if isinstance(receiver_list, str):
        receiver_list = [receiver_list]

    # Send SMS
    for number in receiver_list:
        message = client.messages.create(
            body=msg,
            from_=twilio_number,
            to=number
        )

        print("SMS Sent")
        print("To :", number)
        print("SID:", message.sid)

    if success_msg:
        frappe.msgprint("SMS Sent Successfully")

    return True



def send_token_via_sms(otpsecret, token=None, phone_no=None):
	"""
	Generate OTP and send using Twilio (trial-safe version)

	:param otpsecret: OTP secret for generating HOTP
	:param token: Token to use for HOTP generation
	:param phone_no: Phone number to send OTP to
	"""
	if not phone_no:
		return False

	try:
		hotp = pyotp.HOTP(otpsecret)
		token_int = int(token) if token else 0
		otp_code = hotp.at(token_int)

		account_sid = frappe.conf.get("twilio_account_sid")
		auth_token = frappe.conf.get("twilio_auth_token")
		twilio_number = frappe.conf.get("twilio_phone_number")

		if not (account_sid and auth_token and twilio_number):
			frappe.log_error(message="Twilio credentials missing in site config", title="OTP Error")
			return False

		client = Client(account_sid, auth_token)

		# NOTE: On a Twilio TRIAL account, body must be a template name.
		# "sms_2fa" is one of the allowed trial templates and fits this use case.
		# Once upgraded, replace this with your real OTP message, e.g.:
		# body = f"Your OTP is {otp_code}. It expires in 5 minutes."
		body = "sms_2fa"

		message = client.messages.create(
			body=body,
			from_=twilio_number,
			to=phone_no
		)

		frappe.logger().info(f"OTP SMS sent to {phone_no}, SID: {message.sid}")
		return True

	except TwilioRestException as e:
		frappe.log_error(message=f"Twilio OTP send failed: {str(e)}", title="OTP Error")
		return False

	except Exception as e:
		frappe.log_error(message=f"Failed to send OTP: {str(e)}", title="OTP Error")
		return False