import { spawn } from "child_process";
import util from "util";
import { EventEmitter } from "events";

class FFplay {
  constructor(file, opts) {
    opts = opts || ["-nodisp", "-autoexit"];
    opts.unshift(file);

    this.proc = spawn("ffplay", opts, { stdio: "ignore" });

    this.ef = function () {
      this.proc.kill();
    }.bind(this);

    process.on("exit", this.ef);

    this.proc.on("exit", () => {
      if (this.running) {
        this.running = false;
        process.removeListener("exit", this.ef);
        if (!this.manualStop) {
          setImmediate(() => {
            this.emit("stopped");
          });
        }
      }
    });
    this.running = true;
  }
  pause() {
    if (!this.paused) {
      this.proc.kill("SIGSTOP");
      this.paused = true;
      this.emit("paused");
    }
  }
  resume() {
    if (this.paused) {
      this.proc.kill("SIGCONT");
      this.paused = false;
      this.emit("resumed");
    }
  }
  stop() {
    this.manualStop = true;
    this.proc.kill("SIGKILL");
  }
}

util.inherits(FFplay, EventEmitter);

FFplay.prototype.paused = false;
FFplay.prototype.running = false;

export default FFplay;
