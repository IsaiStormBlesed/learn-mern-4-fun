const express = require("express");
const dotenv = require("dotenv").config();
const goalsRoute = require("./routes/goalRoutes.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 5000;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
