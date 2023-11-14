const express = require("express");
const session = require("express-session");

const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
