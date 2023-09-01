const express = require("express");
const app = express();

const authRouter = require("./routers/authRouter");

app.use(express.json());
app.use("/api/v1", authRouter);

// app.get("/login", (req, res) => {
//   res.redirect(spotifyApi.createAuthorizeURL(scopes));
// });

// app.get("/callback", (req, res) => {
//   const error = req.query.error;
//   const code = req.query.code;
//   const state = req.query.state;

//   if (error) {
//     console.error("Callback Error:", error);
//     res.send(`Callback Error: ${error}`);
//     return;
//   }

//   spotifyApi
//     .authorizationCodeGrant(code)
//     .then((data) => {
//       const access_token = data.body["access_token"];
//       const refresh_token = data.body["refresh_token"];
//       const expires_in = data.body["expires_in"];

//       spotifyApi.setAccessToken(access_token);
//       spotifyApi.setRefreshToken(refresh_token);

//       console.log("access_token:", access_token);
//       console.log("refresh_token:", refresh_token);

//       console.log(
//         `Sucessfully retreived access token. Expires in ${expires_in} s.`
//       );
//       res.send("Success! You can now close the window.");

//       setInterval(async () => {
//         const data = await spotifyApi.refreshAccessToken();
//         const access_token = data.body["access_token"];

//         console.log("The access token has been refreshed!");
//         console.log("access_token:", access_token);
//         spotifyApi.setAccessToken(access_token);
//       }, (expires_in / 2) * 1000);
//     })
//     .catch((error) => {
//       console.error("Error getting Tokens:", error);
//       res.send(`Error getting Tokens: ${error}`);
//     });
// });

// spotifyApi.setAccessToken(
//   "BQD-zn5_HdaLDWmGtUcdOSJ23s4JQicMFlQtBhoWIcDh6MwsBO327plTKnWpF7Wq-derwlpAvFLHvmt5k5V1cgwPamT07DHwzv-dN6WxmeQyBdR7LYoY3g3WljzHBANJ3J1z5pdtQGEHZee18q6qGky9Yuu41BShFzlTQ_IW7j0z_oanvsV9iy07mrdc7mn4VHidUteMpVEJZgYdwqsW7fNv02fMKj7T8a8loQZCyzIWC4VN5S-mJ612bXKhQJZVJZmhRCsFr8CeE8nNgUFooqF8D3MkXT-EnUAfpOIavqvfA3WP1ZeDT4skjWF2hJ8CP_TMxcDN1nWcHQGe7xvE"
// );

// spotifyApi.searchArtists("john digweed").then(
//   function (data) {
//     console.log(data.body);
//   },
//   function (err) {
//     console.error(err);
//   }
// );

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const scopes = [
//     "user-read-private",
//     "user-read-email",
//     "playlist-read-private",
//   ];
//   // Create the auth options
//   const authOptions = {
//     method: "post", // Use the POST method
//     url: "https://accounts.spotify.com/api/token",
//     headers: {
//       Authorization:
//         "Basic " +
//         Buffer.from(client_id + ":" + client_secret).toString("base64"),
//     },
//     data: `grant_type=client_credentials&scope=${scopes.join("%20")}`,
//   };

//   app.post("/getAccessToken", (req, res) => {
//     // Make the POST request
//     axios(authOptions)
//       .then((response) => {
//         // Send the access token back to the client
//         res.json({ access_token: response.data });
//       })
//       .catch((error) => {
//         // Handle errors and send an error response
//         res.status(500).json({ error: "Unable to obtain access token" });
//       });
//   });

//   var redirect_uri = "http://localhost:3000/callback";

//   app.get("/login", function (req, res) {
//     var state = "generateRandomString74b47fe366aa43029091";
//     var scope = "user-read-private user-read-email";

//     res.redirect(
//       "https://accounts.spotify.com/authorize?" +
//         querystring.stringify({
//           response_type: "code",
//           client_id: client_id,
//           scope: scope,
//           redirect_uri: redirect_uri,
//           state: state,
//         })
//     );
//   });

//   app.get("/callback", function (req, res) {
//     res.send(res.body);
//   });
