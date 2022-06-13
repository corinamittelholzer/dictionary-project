import React from "react";
import Synonyms from "./Synonyms";

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
              <Synonyms synonyms={element.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
