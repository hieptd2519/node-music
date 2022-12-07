import express from "express";
import FFplay from "./src/FFplay/index.js";

const app = express();
const port = 5000;
const player = new FFplay(
  "./src/downloads/MẶT_MỘC___Phạm_Nguyên_Ngọc_x_VAnh_x_Ân_Nhi_Or.mp3"
);
//test

app.get("/", (req, res) => {
  player.running = true;

  res.send("Hello World!");
});
setTimeout(() => {
  player.pause();
  console.log("pause");
}, 12000);
setTimeout(() => {
  player.resume();
  console.log("resume");
}, 15000);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
