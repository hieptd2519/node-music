import AudioRouter from "./audio.js";

function routers(app) {
  app.use("/audio", AudioRouter);
}

export default routers;
