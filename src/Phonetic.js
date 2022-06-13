import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="phoneticText">{props.phonetic.text}</span>
      <span className="ms-4">🗣 </span>
      <a
        href={props.phonetic.audio}
        target="_blank"
        className="ms-2 phoneticAudio"
      >
        Listen
      </a>
    </div>
  );
}
