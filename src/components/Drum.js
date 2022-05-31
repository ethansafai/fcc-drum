import { useState } from "react";
import Display from "./Display";
import Key from "./Key";

const Drum = () => {
  const [sound, setSound] = useState("");

  return (
    <div
      id="drum-machine"
      className="max-w-xl w-full grid grid-cols-3 grid-rows-3 p-2 gap-4 border-4 border-green-400 mx-4"
    >
      <Key
        keyCode="Q"
        id="Chord 1"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="W"
        id="Chord 2"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="E"
        id="Chord 3"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="A"
        id="Light Percussion"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="S"
        id="Cymbal"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="D"
        id="High hat"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="Z"
        id="Kick"
        audio="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="X"
        id="Stick"
        audio="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        setSound={setSound}
      />
      <Key
        keyCode="C"
        id="Snare"
        audio="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        setSound={setSound}
      />
      <Display sound={sound} />
    </div>
  );
};

export default Drum;
