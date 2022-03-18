import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSearch } from "../state/search";


const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");


  let inputHandler = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setKeyword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get(`http://localhost:3001/api/products/find/${keyword}`)
    .then(({ data }) => {
      dispatch(setSearch([data]))
    });
    navigate(`/vinos/${keyword}`);
  };


  return (
    <form className="d-flex d-none d-lg-block w-25 mx-5" onSubmit={handleSubmit}>
    <input
      className="form-control me-md-3 "
      type="search"
      placeholder="Buscar..."
      aria-label="Search"
      onChange={inputHandler}
    />
  </form>
  );
};

export default Search;