import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [api, setApi] = useState([]);
  const [page, setPage] = useState(1);
  const [filterString, setFilterString] = useState('');
  const [filterapi, setFilterApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const data = await response.json();
      setApi(data.results);
    };

    fetchData();
  }, [page]);

  const handlenextpage = () => {
    setPage(page + 1);
    console.log("next");
  };

  const handleprevpage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log("prev");
    }
  };

  useEffect(() => {
    console.log("str: ", filterString)
  }, [filterString])

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  };

  

  return (
    <div id='showdata'>
      <input type="text" placeholder="Enter filter string"  value={filterString} onChange={handleFilterChange} />
      {api.map((character) =>
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      )}

      {filterapi.map((character) =>
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      )}
      <button onClick={handleprevpage}>Previous</button>
      <button onClick={handlenextpage}>Next</button>


    </div>
  );
}


export default App;
