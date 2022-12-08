import express from "express";
import FFplay from "./src/FFplay/index.js";
import ControlRouter from "./src/routers/control.js";

const app = express();
const port = 5000;

const listSongPaths = [
  "./src/downloads/file_example_MP3_700KB.mp3",
  "./src/downloads/MẶT_MỘC___Phạm_Nguyên_Ngọc_x_VAnh_x_Ân_Nhi_Or.mp3",
];

app.use("/control", ControlRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
