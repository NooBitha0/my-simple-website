import os
from email_notification import send_email
from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__) 
# CORS(app) 
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

# API endpoint to handle form data submission and send email
@app.route('/submit_form', methods=['POST'])
def submit_form():
    # Get the JSON data from the request body
    print("request is ",request)
    form_data = request.get_json()
    

    if form_data:
        try:
            # Send the email with the form data
            send_email(form_data)
            return jsonify({"message": "Form submitted and email sent successfully"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Invalid or missing JSON data"}), 400

if __name__ == '__main__':
    app.run(debug=True)