const express = require("express");
const app = express();
const port = 3030;

const postsRouter = require("./routes/posts.js");

app.use(express.static("imgs"));

/*
app.get("/", (req, res) => {
  res.send("Hello marzia");
});
*/

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost${port}`);
});
