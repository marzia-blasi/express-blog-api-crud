const express = require("express");
const router = express.Router();

//importiamo posts da data

const posts = require("../data/posts.js");

// Index + bonus
router.get("/", (req, res) => {
  // res.json(posts);
  let filterposts = posts;

  if (req.query.tags) {
    filterposts = posts.filter((post) => post.tags.includes(req.query.tags));
  }

  res.json(filterposts);
});

// Show + Bonus
router.get("/:id", (req, res) => {
  console.log(req.params);

  //const id = req.params.id;

  //conversione id in numero
  const id = parseInt(req.params.id);

  //ricerca dell'id (cicla dentro posts per restituirci il singolo elemento post)
  const post = posts.find((posts) => posts.id === id);

  //res.send(`post numero ${id}`);

  //se il post richiesto non esiste "post non trovato"

  if (!post) {
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json(post);
});

//Store
router.post("/", (req, res) => {
  // res.send(`crea nuovo post`);
  console.log(req.body);

  //nuovo id che s'incrementa dopo quello già esistente
  const newId = posts[posts.length - 1].id + 1;
  //oggetto post
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  //aggiunta a posts
  posts.push(newPost);

  console.log(posts);

  // status + json
  res.status(201);
  res.json(newPost);
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

//Destroy + Bonus
router.delete("/:id", (req, res) => {
  /*
  const id = req.params.id;
    res.send(`cancella tutto il post ${id}`);
    */

  //conversione id in numero
  const id = parseInt(req.params.id);

  //ricerca dell'id (cicla dentro posts per restituirci il singolo elemento post)
  const post = posts.find((posts) => posts.id === id);

  //se il post richiesto non esiste "post non trovato"

  if (!post) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  // troviamo il post e lo rimuoviamo
  posts.splice(posts.indexOf(post), 1);
  console.log(posts);

  //status
  res.sendStatus(204);
});

module.exports = router;
