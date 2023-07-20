#!/bin/bash

# Configuration
recipient="shivamshinde786@gmail.com"
sender="shivamshinde786@gmail.com"
subject="Hello from Shell Script"
body="This is the body of the email."

# Compose the email
echo -e "Subject: $subject\n\n$body" > email.txt

# Send the email
cat email.txt | mail -s "$subject" -r "$sender" "$recipient"

# Clean up
rm email.txt

echo "Email sent successfully."
