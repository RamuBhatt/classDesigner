const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const loginRouter = require("./Routes/loginRoutes");
const signupRouter = require("./Routes/signUpRoutes");
const schoolRouter = require("./Routes/schoolRoutes");
const timeTableRouter = require("./Routes/timeTableRoutes");
const adminRouter = require("./Routes/adminRoutes");
const standardRouter = require("./Routes/standardRoutes");

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api",
    adminRouter,
    standardRouter,
    schoolRouter,
    loginRouter,
    signupRouter,
    timeTableRouter,
);

app.listen(1000, () => {
    console.log("Running on port 1000");
});