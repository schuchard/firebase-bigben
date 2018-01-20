import * as functions from 'firebase-functions';

export const bigben = functions.https.onRequest((req, res) => {
  const hours = new Date().getHours() % 12 + 1; // london is UTC + 1hr;
  const time = new Date().toISOString();
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
      ${time}
    </body>
  </html>`);
});
