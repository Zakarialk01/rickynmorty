import React, { useState, useEffect } from "react";
import Character from "./Character";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([]);
  const [query, setQuery] = useState("");

  /*const getData = async () => {
    const response = await fetch(`  https://rickandmortyapi.com/api/character`);
    const result = await response.json();
    if (result) {
      setData(result);
    } else {
      alert("not found");
    }*/

  useEffect(() => {
    axios
      .get(` https://rickandmortyapi.com/api/character?name=${query}  `)
      .then((response) => {
        // console.log("hello", response.data.results);
        setGetData(response.data.results);
      })
      .catch((err) => {
        alert("not found");
      });
    console.log(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Ricky and Morty </h1>
        <form className="form" onSubmit={handleSearch}>
          <input type="text" className="input" onChange={inputSearch} />
          <button className="button">search</button>
        </form>
      </div>
      <div className="flexContainer">
        {getData.map((item) => (
          <Character item={item} key={item.id} />
        ))}
      </div>

      <footer class="footer">
        <div class="footerContainer">
          <h5 class="copyright">© LOUKILIZAKARIA 2020</h5>
        </div>
      </footer>
    </div>
  );
}

export default App;
