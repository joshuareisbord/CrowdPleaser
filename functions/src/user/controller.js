
const functions = require('firebase-functions');

const SpotifyWebApi = require('spotify-web-api-node')

const spotifyConfig = {
  clientId: functions.config().spotify.id,
  clientSecret: functions.config().spotify.secret,
  redirectUrl: functions.config().spotify.redirecturi
};

const spotifyApi = new SpotifyWebApi(spotifyConfig);

async function proxySpotifyToken(_req, res){
  //Retrieve code from request
  const code = _req.body.code;
  const refreshToken = _req.body.refresh_token;

  if(!code && !refreshToken){
    return res.status(403).json({success: false, data: "Not authorized"});
  }

  if(refreshToken){
    //Refresh token is available, retrieve a new access token
      spotifyApi.refreshAccessToken().then(
        (data) => {
          data.body.refreshToken = refreshToken;
          return res.json(data.body)
        },
        (error) => {
          functions.logger.info("Could not refresh access token! - " + error, {structuredData: true});
          return ({success: false, error: error});
        }
    ).catch((oError) => {
      return res.json(oError);
    });
    // return res.json({ todo: "Refresh access token"});
  }

  if(code){
    //Retrieve new refresh token and access token
      spotifyApi.authorizationCodeGrant(code).then(
            (data) => {
              return res.json(data.body);
            },
            (error) => {
              functions.logger.info("Something went wrong! - " + error, {structuredData: true});
              return ({success: false, error: error});
            }
    ).catch((oError) => {
      return res.json(oError)
    });
    // return res.json({ todo: spotifyConfig.clientId});
  }


}

module.exports = {
  proxySpotifyToken
};