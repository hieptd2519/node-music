import FFplay from "../FFplay/index.js";
import { Router } from "express";

let player = null;

const ControlRouter = new Router();

ControlRouter.post("/play", async (req, res) => {
  if (!!player) {
    player.stop();
    player = null;
  }
  const path = req.query.path;
  player = new FFplay("../downloads/file_example_MP3_700KB.mp3", [
    "-nodisp",
    "-autoexit",
  ]);
  player.running = true;

  res.send(`Playing ${path}`);
});

ControlRouter.post("/pause", async (req, res) => {
  if (!player) {
    return;
  }
  player.pause();
  res.send(`Paused ${path}`);
});

ControlRouter.post("/continue", async (req, res) => {
  if (!player) {
    return;
  }
  player.resume();
  res.send(`Resumed ${path}`);
});

ControlRouter.post("/stop", async (req, res) => {
  if (!player) {
    return;
  }
  player.stop();
  player = null;
  res.send(`Stopped ${path}`);
});

export default ControlRouter;
