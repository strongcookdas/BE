const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connect = require("./models/index");
const cors = require("cors");

dotenv.config();

const locationRouter = require("./routes/location");
const app = express();
const port = 8000;
connect();

app.use(cors({origin:true,credentials:true}));
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/locations",locationRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({err: err.message? err.message:"server error"});
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
