import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (element, index) {
        return (
          <div key={index}>
            <p>
              {element.definition}
              <br />
              <em>{element.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
