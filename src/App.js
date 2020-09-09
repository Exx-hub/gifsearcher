import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Gifs from "./Gifs";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    setQuery(search);
    // const getData = async () => {
    //   const result = await axios.get(
    //     `https://api.giphy.com/v1/gifs/search?api_key=2ei8zAaca2QwyzUvNgmbm6A2eTVD90Na&q=${search}&limit=10&offset=0&rating=pg-13&lang=en`
    //   );
    //   console.log(result);
    //   setResults(result.data);
    //   setSearch("");
    // };
    // getData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=2ei8zAaca2QwyzUvNgmbm6A2eTVD90Na&q=${query}&limit=10&offset=0&rating=pg-13&lang=en`
      );
      console.log(data.data.data);
      setResults(data.data.data);
    };

    if (query) {
      console.log("fetching");
      fetchData();
    }
  }, [query]);

  return (
    <div className="App">
      <h1>Async React Hooks</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          placeholder="search for GIFs..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Gifs results={results} />
    </div>
  );
}

export default App;
