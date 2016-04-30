'use latest';

const twilio = require('twilio');

module.exports = (ctx, done) => {
  const TWILIO_SID = ctx.data.TWILIO_SID;
  const AUTH_TOKEN = ctx.data.AUTH_TOKEN;
  const twilioClient = twilio(TWILIO_SID, AUTH_TOKEN);
  const temperature = ctx.data.temperature;
  const names = ['dude', 'man', 'guy', 'bro', 'brother', 'son', 'pal', 'friend', 'buddy', 'mate'];
  const name = names[Math.floor(Math.random() * 10)];

  const messagePromise = twilioClient.sendMessage({
    to: ctx.data.TO_NUM,
    from: ctx.data.FROM_NUM,
    body: `It's too cold, ${name}! It's ${temperature} degrees up in here!`
  });

  messagePromise.then((err, responseData) => {
    done(null, 'The text has been sent!');
  })
  .catch(err => {
    done(null, `There was an error: ${err.message}`);
  });
};
