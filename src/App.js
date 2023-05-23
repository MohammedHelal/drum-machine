import { useCallback, useEffect, useState } from "react";

let audio = new Audio();

function App() {
  const [soundName, setSoundName] = useState("");
  // handle what happens on key press
  const handleKeyPress = useCallback((e) => {
    e.preventDefault();

    switch (e.key) {
      case "Q":
        document.getElementById("Q").play();
        break;
      case "W":
        document.getElementById("W").play();
        break;
      case "E":
        document.getElementById("E").play();
        break;
      case "A":
        document.getElementById("A").play();
        break;
      case "S":
        document.getElementById("S").play();
        break;
      case "D":
        document.getElementById("D").play();
        break;
      case "Z":
        document.getElementById("Z").play();
        break;
      case "X":
        document.getElementById("X").play();
        break;
      case "C":
        document.getElementById("C").play();
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  function handleClick(e) {
    switch (e.target.value) {
      case "q":
        document.getElementById("Q").play();
        setSoundName("Heater 1");
        break;
      case "w":
        document.getElementById("W").play();
        setSoundName("Heater 2");
        break;
      case "e":
        document.getElementById("E").play();
        setSoundName("Heater 3");
        break;
      case "a":
        document.getElementById("A").play();
        setSoundName("Heater 4");
        break;
      case "s":
        document.getElementById("S").play();
        setSoundName("Clap");
        break;
      case "d":
        document.getElementById("D").play();
        setSoundName("Open-HH");
        break;
      case "z":
        document.getElementById("Z").play();
        setSoundName("Kick-n-Hat");
        break;
      case "x":
        document.getElementById("X").play();
        setSoundName("Kick");
        break;
      case "c":
        document.getElementById("C").play();
        setSoundName("Closed-HH");
        break;
      default:
        break;
    }
  }

  function handleChange(e) {
    e.preventDefault();

    audio.volume = e.target.value / 100;
    audio.src = obj["ping"];
    audio.play();
  }

  return (
    <div id="drum-machine" className="row">
      <div className="container text-center bg-light my-auto w-50">
        <div className="text-center my-auto mx-auto">
          <h1 className="border-primary border-bottom text-primary">
            Drum machine
          </h1>
        </div>
        <div className="row p-2">
          <div className="col">
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="heater-1"
                  value="q"
                  onClick={(e) => handleClick(e)}
                >
                  Q
                  <audio
                    id="Q"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  ></audio>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="heater-2"
                  value="w"
                  onClick={(e) => handleClick(e)}
                >
                  W
                  <audio
                    id="W"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  ></audio>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="heater-3"
                  value="e"
                  onClick={(e) => handleClick(e)}
                >
                  E
                  <audio
                    id="E"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  ></audio>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="heater-4"
                  value="a"
                  onClick={(e) => handleClick(e)}
                >
                  A
                  <audio
                    id="A"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                  ></audio>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="clap"
                  value="s"
                  onClick={(e) => handleClick(e)}
                >
                  S
                  <audio
                    id="S"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  ></audio>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="open-hh"
                  value="d"
                  onClick={(e) => handleClick(e)}
                >
                  D
                  <audio
                    id="D"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                  ></audio>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="kick-n-hat"
                  value="z"
                  onClick={(e) => handleClick(e)}
                >
                  Z
                  <audio
                    id="Z"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                  ></audio>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="kick"
                  value="x"
                  onClick={(e) => handleClick(e)}
                >
                  X
                  <audio
                    id="X"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  ></audio>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 drum-pad"
                  id="closed-hh"
                  value="c"
                  onClick={(e) => handleClick(e)}
                >
                  C
                  <audio
                    id="C"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                  ></audio>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="row m-2 text-center rounded border border-primary"
              style={{ height: "30%" }}
            >
              <h3 id="display" className="text-primary my-auto">
                {soundName}
              </h3>
            </div>
            <div className="row m-2" style={{ height: "10%" }}></div>
            <div className="row m-2 p-2" style={{ height: "30%" }}>
              <label
                htmlFor="customRange1"
                className="form-label text-start ml-3 fw-semibold fs-4"
              >
                Volume range:
                <input
                  id="customRange1"
                  style={{ display: "block", width: "100%" }}
                  type="range"
                  defaultValue={50}
                  onMouseUp={(e) => handleChange(e)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

let obj = {
  "Heater 1": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "Heater 2": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "Heater 3": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "Heater 4": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  Clap: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "Open-HH": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "Kick-n-Hat": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  Kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "Closed-HH": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  ping: "https://cdn.pixabay.com/audio/2022/03/15/audio_17cba0354b.mp3"
};
