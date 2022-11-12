const express = require("express");
const dbConnector = require("./db");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(require("./Routes/user"))
app.use(require("./Routes/auth"));
app.use(require("./Routes/purchase"));
app.use(require("./Routes/product"));
app.use(require("./Routes/sell"));


app.use(dbConnector);

//global error controller
app.use((err, _req, res, _next) => {
  console.log(err);
  const message = err.msg ? err.msg : "Server error occured";
  const status = err.status ? err.status : 500;
  res.status(status).json({
    msg: message,
  });
});

//database and server connector
port = 4000;
dbConnector("mongodb://localhost:27017/possytem")
  .then(() => {
    console.log("Database successfully connected");
    app.listen(port, () => {
      console.log(`The server run successfully at ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
