
// const querystring = require("querystring");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//
// exports.auth_get = functions.https.onRequest((request, response) => {
//   const scope = "user-read-currently-playing " +
//       "user-read-playback-position " +
//       "user-modify-playback-state";
//
//   response.redirect("https://accounts.spotify.com/authorize?" +
//       querystring.stringify({
//         response_type: "code",
//         client_id : functions.config().spotify.id,
//         scope: scope,
//         redirect_uri : functions.config().spotify.redirecturi,
//       }));
//   // functions.logger.info("", {structuredData: true});
// });

const functions = require('firebase-functions');
const server = require("./src/server");

//Create API endpoint for firebase functions using server.js to handle incoming calls
//Endpoint url: https://yourfirebaseurl.com/api/*
//* will be filled with the endpoints defined in server.js
const api = functions
    .runWith({memory: "256MB", timeoutSeconds: 60})
    .https
    .onRequest(server);

module.exports = {
  api
};
