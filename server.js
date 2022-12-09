import express from "express";
import routers from "./src/routers/index.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

routers(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
