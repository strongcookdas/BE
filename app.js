const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connect = require("./models/index");

dotenv.config();

const locationRouter = require("./routes/location");
const app = express();
const port = 8080;
connect();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/location",locationRouter);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
