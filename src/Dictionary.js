import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keywoard, setKeywoard] = useState("null");
  let [results, setResults] = useState();

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keywoard}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywoardChange(event) {
    setKeywoard(event.target.value);
  }

  return (
    <div className="Dictionary mt-3">
      <h1>Dictionary 🔍 </h1>
      <div>What are you searching for?</div>
      <form className="Searchform mt-3 mb-3" onSubmit={search}>
        <input type="search" onChange={handleKeywoardChange}></input>
      </form>
    </div>
  );
}
