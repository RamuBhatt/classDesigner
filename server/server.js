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
const usersRouter = require("./Routes/userRouters");
const studentRouter = require("./Routes/studentRoutes");

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api",
signupRouter,
usersRouter,
adminRouter,
studentRouter,
standardRouter,
timeTableRouter,
loginRouter,
schoolRouter
);

// app.use("/api", require("./Routes/adminRoutes"));
// app.use("/api", require("./Routes/examRoutes"));
// app.use("/api", require("./Routes/loginRoutes"));
// app.use("/api", require("./Routes/parentRoutes"));
// app.use("/api", require("./Routes/schoolRoutes"));
// app.use("/api", require("./Routes/signUpRoutes"));
// app.use("/api", require("./Routes/standardRoutes"));
// app.use("/api", require("./Routes/studentRoutes"));
// app.use("/api", require("./Routes/teacherRoutes"));
// app.use("/api", require("./Routes/timeTableRoutes"));
// app.use("/api", require("./Routes/userRouters"));

app.listen(1000, () => {
    console.log("Running on port 1000");
});