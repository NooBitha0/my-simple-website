import smtplib
import json
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from config import email_send_acc

# Function to send email
def send_email(json_data):
    # sender_email = "abc@gmail.com"
    # password = "abc def xyz"
    print("----------json_data--------", json_data)
    sender_email = email_send_acc['username']
    password = email_send_acc['password']
    print("----------sender email--------", sender_email)
    print("----------sender password--------", password)
    # receiver_email = "def@gmail.com"
    receiver_email = json_data['email_id']
    print("----------receiver email--------", receiver_email)
    
    
    # Convert JSON data to formatted string
    json_str = json.dumps(json_data, indent=4)
    
    # Set up the message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = "Form Data Submission"
    
    # Email body with the JSON data
    body = f"Here is the submitted form data:\n\n{json_str}"
    message.attach(MIMEText(body, "plain"))
    
    # Set up the SMTP server
    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()  # Enable security
        server.login(sender_email, password)  # Login to your email account
        server.sendmail(sender_email, receiver_email, message.as_string())  # Send the email
        server.quit()
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error occurred: {e}")
