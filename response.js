
const twilio = require('twilio');
require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;

const client = require('twilio')(accountSid, authToken);


function sendsms(contest) {
  client.messages
    .create({
      body: 'heyy ur contest is starting soon.....',
      messagingServiceSid: 'MGb1bdc1ab0eece55ed0527938140ce638',
      to: process.env.TO_PHONE
    })
    .then(message => console.log(message.sid));
}


async function checkcontest() {
  const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

  const res = await fetch("https://competeapi.vercel.app/contests/upcoming/");
  const data = await res.json();
  const now = new Date();
  data.forEach(contest => {
    const start = new Date(contest.startTime);
    const diff = (start - now) / (1000 * 60);

    if (diff > 4 && diff < 6) {

      sendsms(contest);
    }
  });
}



checkcontest();


