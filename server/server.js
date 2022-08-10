const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalsRoutes = require("./routes/goalRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use("/api/goals", goalsRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
