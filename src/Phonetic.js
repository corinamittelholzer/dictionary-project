import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="phoneticText">{props.phonetic.text}</div>

      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="listening ms-2 phoneticAudio"
        title="audio sample"
      >
        listen
      </a>
    </div>
  );
}
