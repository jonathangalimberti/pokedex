import { useEffect, useState } from "react";

export const Appi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container  ">
      {data.map((item) => (
        <div className="card my-3" key={item.name}>
          <img src="{item.url}" className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
