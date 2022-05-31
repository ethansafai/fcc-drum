import { useCallback, useEffect, useRef } from "react";

const Key = ({ keyCode, id, audio, setSound }) => {
  const asciiKeyCode = keyCode.toUpperCase().charCodeAt(0);
  const audioRef = useRef(null);
  const drumRef = useRef(null);

  const handleClick = useCallback(
    (e) => {
      if (e.keyCode === asciiKeyCode) {
        drumRef.current.classList.add("text-white");
        setSound(id);
        audioRef.current.play();
        setTimeout(() => {
          drumRef.current.classList.remove("text-white");
        }, 100);
      }
    },
    [asciiKeyCode, id, setSound]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, [handleClick]);

  return (
    <div
      ref={drumRef}
      id={id}
      className="drum-pad cursor-pointer hover:bg-purple-400"
      onClick={() => handleClick({ keyCode: asciiKeyCode })}
    >
      <div className="key-letter">
        {keyCode}
      </div>
      <audio
        ref={audioRef}
        className="clip"
        id={keyCode}
        src={audio}
        type="audio/mpeg"
      />
    </div>
  );
};

export default Key;
