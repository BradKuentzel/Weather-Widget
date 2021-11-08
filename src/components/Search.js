import React, { useState, useEffect } from "react";
import "./style.css"
import WeatherDetails from "./WeatherDetails";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("34292")

  return (
    <>
    <div className="wrap">
      <div className="search">
        <input 
          type="search" 
          placeholder="Enter zipcode..." 
          id="search" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <button className="searchButton">Search</button>
    </div>
    <WeatherDetails />
    </>
  )
}

export default Search;