import FFplay from "../FFplay";

class AudioController {
  constructor() {
    this.player = null;
  }

  play = async (req, res) => {
    if (!!this.player) {
      this.player.stop();
      this.player = null;
    }
    const path = req.query.path;
    this.player = new FFplay("../downloads/file_example_MP3_700KB.mp3", [
      "-nodisp",
      "-autoexit",
    ]);
    this.player.running = true;
    console.log({
      player: this.player,
    });

    res.send(`Playing ${path}`);
  };

  pause = async (req, res) => {
    if (!this.player) {
      return;
    }
    this.player.pause();
    res.send(`Paused ${path}`);
  };

  continue = async (req, res) => {
    if (!this.player) {
      return;
    }
    this.player.resume();
    res.send(`Resumed ${path}`);
  };

  stop = async (req, res) => {
    if (!this.player) {
      return;
    }
    this.player.stop();
    this.player = null;
    res.send(`Stopped ${path}`);
  };
}

export default new AudioController();
