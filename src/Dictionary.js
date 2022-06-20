import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-3">
      <h1>Dictionary 🔍 </h1>
      <section>
        <div className="question">What word do you want to look up?</div>
        <form className="Searchform mt-3 mb-3" onSubmit={search}>
          <input type="search" onChange={handleKeywordChange}></input>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
