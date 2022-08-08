const express = require("express");
const dotenv = require("dotenv").config();
const goalsRoute = require("./routes/goalRoutes.js");

const port = process.env.PORT || 5000;
const app = express();

app.use("/api/goals", goalsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
