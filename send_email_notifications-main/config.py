import configparser

config = configparser.ConfigParser()
config.read('./conf/variables.ini')


email_send_acc = {
    'username': config.get('email', 'username'),
    'password': config.get('email', 'password')
}

file_paths = {
    'input_directory': config.get('file_paths', 'input_directory'),
    'output_directory': config.get('file_paths', 'output_directory')
}
