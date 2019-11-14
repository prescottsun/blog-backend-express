const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// const corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers":
//     "Origin, X-Requested-With, Content-Type, Accept"
// };

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/posts", postRouter);

module.exports = app;
