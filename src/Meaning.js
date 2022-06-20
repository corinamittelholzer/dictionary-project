import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning mt-4">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (element, index) {
        return (
          <div key={index}>
            <div className="definition"> {element.definition}</div>
            <div className="example">{element.example}</div>
            <Synonyms synonyms={element.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
