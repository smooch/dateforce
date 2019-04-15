var OKCupid = require("okcupidjs");

var okc = new OKCupid();

var oauthToken = "";

okc.login("bobby.connolly@smooch.io", "XCr8xkcj8qtLEgt", function(
  err,
  res,
  body
) {
  oauthToken = body.oauth_accesstoken;
  console.log("done!");
});

// okc.getQuickmatch(function(err, res, body) {
//   console.log("err", err);
//   console.log("res", res);
//   console.log("body", body);
// });

// okc.sendMessage("bobby.connolly@smooch.io", "test message", function(
//   err,
//   res,
//   body
// ) {
//   console.log("err", err);
//   console.log("res", res);
//   console.log("body", body);
// });

// okc.getVisitors(function(err, res, body) {
//   console.log("get visitors", res);
// });

// okc.getRecentMessages(function(err, res, body) {
//   console.log("get recent msgs", err);
//   console.log("response", res);
//   console.log("body", body);
// });

// do {} while (1 == 1);
