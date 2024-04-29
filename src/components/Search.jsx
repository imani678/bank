import React from "react";

function Search({ word, setWord, array }) {
  function change(e) {
    const something = e.target.value.toLowerCase(); // Convert search input to lowercase for case-insensitive matching
    if (something.length > 0) {
      const another = word.filter((item) => {
        return item.description.toLowerCase().includes(something); // Use includes directly as we're already working with lowercase strings
      });
      setWord(another); // Update word with filtered results
    } else {
      setWord(array); // If search input is empty, display all items
    }
  }

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search by description"
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={change}
      />
    </div>
  );
}

export default Search;
