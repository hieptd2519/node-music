import { Router } from "express";
import AudioController from "../controllers/AudioController";

const router = Router();

router.post("/play", AudioController.play);
router.post("/pause", AudioController.pause);
router.post("/continue", AudioController.continue);
router.post("/stop", AudioController.stop);

export default router;
