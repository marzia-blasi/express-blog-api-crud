const express = require("express");
const router = express.Router();

//importiamo posts da data

//const posts = require("../data/posts.js");

// Index + bonus
router.get("/");

// Show + Bonus
router.get("/:id");

//Store
router.post("/");

//Update
router.put("/:id");

//Modify
router.patch("/:id");

//Destroy + Bonus
router.delete("/:id");

module.exports = router;
