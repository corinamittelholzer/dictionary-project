import React, { useState } from "react";

export default function Dictionary() {
  let [keywoard, setKeywoard] = useState("null");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keywoard}`);
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
