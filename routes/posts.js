const express = require("express");
const router = express.Router();

// Index (da aggiustare)

router.get("/", (req, res) => {
  res.json(posts);
});

/*
// Show da aggiustare 
router.get("/:id", (req, res) => {
  console.log(req.params);
  //const id = req.params.id;
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);
  //res.send(`post numero ${id}`);
  res.json(posts);
});
*/

//Store
router.post("/", (req, res) => {
  res.send(`crea nuovo post`);
});

//Update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`modifica tutto il post n ${id}`);
});

//Modify
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`mododifica parzialmente il post n ${id}`);
});

//Destroy da finire
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`cancella tutto il post ${id}`);
});

module.exports = router;
