const path = require("path");
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

//serve front end
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
