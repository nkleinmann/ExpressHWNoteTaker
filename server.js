// series of npm packages that will be used to give server useful functionality
const express = require("express");

// beginning for what sets up basic properties of our express server

// tells node that we are creating an "express" server
const app = express();

// sets an initial port 
const PORT = process.env.PORT || 4040;


// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// https://expressjs.com/en/starter/static-files.html#:~:text=To%20serve%20static%20files%20such,in%20middleware%20function%20in%20Express.&text=The%20root%20argument%20specifies%20the,which%20to%20serve%20static%20assets.
app.use(express.static("public"));

// end of what sets up basice properties for express server

//ROUTER
// This points our server to a series of "route" files
// The routes give server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener
// effectively "starts" server

app.listen(PORT, function() {
   console.log(`App listening on PORT: ${PORT}`)
})