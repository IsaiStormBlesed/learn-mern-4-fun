const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ some: "GET goals" });
});

router.post("/", (req, res) => {
  res.json({ some: "POST goals" });
});

router.put("/:id", (req, res) => {
  res.json({ some: `PUT goal number ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ some: `DELETE goal number ${req.params.id}` });
});

module.exports = router;
