const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );