// Require modules
const express = require('express'),
    bodyParser = require('body-parser'), // Require body-parser (to receive post data from clients)
    path = require('path'),
    port = process.env.PORT || 8000,
    app = express() // Create Express app

// configure body-parser to read JSON
app.use(bodyParser.json())

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// Setting our Server to Listen on Port: 8000
app.listen(port, () => console.log(`express listening on port ${port}`));
