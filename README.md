# Temperature Texter

This is a simple page that simulates temperature changing and will hit an endpoint on webtask.io when the temperature is under 32&deg; Fahrenheit.

# Build

To build the project, you first must have four things: a Twilio SID, a Twilio auth token, a number to send the text messages to, and a Twilio phone number to send messages from.

Once you have these, run the `build_project.sh` script with these as environment variables.  Then open the `index.html` in a browser.  When you see the temperature change to less than 32, you should receive a text message.

```
TWILIO_SID={Twilio_Sid} \
AUTH_TOKEN={Twilio_auth_token} \
TO_NUM={Twilio_to_number} \
FROM_NUM={Twilio_from_num} \
./build_project.sh
```

**Don't forget to format the phone numbers correctly (+18675309).**
