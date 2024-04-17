import FetchApi from "./FetchApi";
import "./App.css";
import CharacterCard from "./CharacterCard";
import { useState } from "react";

function App() {
  let data = FetchApi();
  const [search, setSearch] = useState("");
  const [house, setHouse] = useState(null);
  const handleHouse = (event) => {
    const houseName = event.target.alt;
    setHouse(houseName === house ? null : houseName);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1 className="font-got lg:text-6xl md:text-5xl sm:text-4xl max-sm:text-xl">
        Game of trhones WiKi
      </h1>
      <div
        dir="lrt"
        className="w-1/2 sm:h-12 hover:w-full hover:h-12 bg-slate-800 sm:inline-flex max-sm:rounded-2xl sm:rounded-xl"
      >
        <div className=" size-auto flex my-auto ps-2">
          <input
            id="search"
            className="bg-slate-800 text-teal-50"
            placeholder="Name Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="text-teal-50 flex ml-auto lg:pe-2 sm:pe-5">
          <button
            className="bg-transparent hover:bg-gray-900 h-12 w-12 p-0"
            onClick={handleHouse}
          >
            <img
              className="object-contain h-12 w-12"
              src="/assets/baratheon_115486.ico"
              alt="Baratheon"
            />
          </button>
          <button
            className="bg-transparent hover:bg-gray-900 h-12 w-12 p-0 "
            onClick={handleHouse}
          >
            <img
              className="object-contain h-12 w-12"
              src="/assets/lannister_115487.ico"
              alt="Lannister"
            />
          </button>
          <button
            className="bg-transparent hover:bg-gray-900 h-12 w-12 p-0"
            onClick={handleHouse}
          >
            <img
              className="object-contain h-12 w-12"
              src="/assets/stark_115482.ico"
              alt="Stark"
            />
          </button>
          <button
            className="bg-transparent hover:bg-gray-900 h-12 w-12 p-0"
            onClick={handleHouse}
          >
            <img
              className="object-contain h-12 w-12"
              src="/assets/targaryen_115480.ico"
              alt="Targaryen"
            />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data
          .filter(
            (item) =>
              item.fullName.toLowerCase().includes(search.toLowerCase()) &&
              (house
                ? item.family.toLowerCase().includes(house.toLowerCase())
                : true)
          )
          .map((item) => (
            <CharacterCard key={item.id} data={item} />
          ))}
      </div>
    </>
  );
}

export default App;
