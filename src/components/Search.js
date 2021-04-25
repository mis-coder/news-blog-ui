import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "../styles/Search.css";
const Search = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <>
      <form className='search-bar' onSubmit={submitHandle}>
        <input
          type='text'
          className='search-input'
          placeholder='Search For News'
          value={input}
          onChange={handleChange}
        />
        <button type='submit' className='search-btn'>
          <BiSearch />
        </button>
      </form>
    </>
  );
};

export default Search;
