# Step 1: install python or conda(suggestion - go with conda)
        Python: https://www.python.org/downloads/
        Conda: https://www.anaconda.com/download
# Step 2: Create environment
        If Python directly installed on your system then below is the command to create environment
        example - create a Virtual environment in python : 
                python -m venv c:\project_c\virtual_envs\python_virtual_envs\datta_infotech
                c:\project_c\virtual_envs\python_virtual_envs\ --> directory
                datta_infotech --> virtual environment name
        If Conda installed on your system then below is the command to create environment
                conda create -n datta_infotech python=3.9
# Step 3: Activate above environment
        If you are directly using python then
                c:\project_c\virtual_envs\python_virtual_envs\datta_infotech\Scripts\activate
        If you are working with conda
                conda activate datta_infotech
# Step 4: Install all the dependencies by traversing till your requirements file and run below command
        pip install -r requirements.txt 

# Step 5: Start the python app by traversing to main file directory
        python main.py
        
# Step 6: Stop the python app 
        ctrl+c

# Step 7: deactivate above environment
        If you are directly using python then
                c:\project_c\virtual_envs\python_virtual_envs\datta_infotech\Scripts\deactivate.bat
        If you are working with conda
                conda deactivate


# List only main packages in the environment not their sub dependencies:
        pip list --not-required
        conda list --explicit

# Configure variables relating to project
Please Configure the Company Email and password under email section in variables.ini to send a mail or receive an email.

# Sample Request
    API URL : http://127.0.0.1:5000/submit_form
    Method : POST
    headers = {
                'Content-Type': 'application/json'
        }
    payload:
    {
        "name": "John Doe",
        "email_id": "xyz@example.com",
        "message": "This is a test form submission."
    }





# Error relating to password

534, b'5.7.9 Application-specific password required. For more information, go to\n5.7.9  https://support.google.com/mail/?p=InvalidSecondFactor 2adb3069b0e04-53a223e5597sm748220e87.40 - gsmtp'

# Solution:

The error indicates that you're trying to access your Gmail account through a third-party application (like your Flask API) but your Google account has two-factor authentication (2FA) enabled.

When 2FA is enabled, you cannot use your normal account password for third-party apps. Instead, you must use an App Password.

Steps to generate a Google App Password:
1. Go to your Google Account Security Settings:
        Visit Google Account.
2. Enable 2-Step Verification (if not already enabled):
        Under the "Signing in to Google" section, find "2-Step Verification" and enable it.
3. Generate an App Password:

        In the same "Signing in to Google" section, after enabling 2FA, you should see an "App Passwords" option.
        Click on "App Passwords."
        might need to sign in again for security.
        Under "Select the app and device you want to generate the app password for," choose Other (Custom name), name it something like Flask App, and generate the password.
        Google will display a 16-character password that you can use.
4. Update your code:
        Replace the password in the variables.ini with the generated App Password.
