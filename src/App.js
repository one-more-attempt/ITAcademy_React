import { useState } from "react";
import { Filter } from "./components/filter/filter";
import { SearchOptions } from "./components/SearchOptions/SearchOptions";
function App() {
  const [dataBase, setDataBase] = useState([
    { text: "california", id: 1 },
    { text: "everything", id: 2 },
    { text: "aboveboard", id: 3 },
    { text: "washington", id: 4 },
    { text: "basketball", id: 5 },
    { text: "weathering", id: 6 },
    { text: "characters", id: 7 },
    { text: "literature", id: 8 },
    { text: "contraband", id: 9 },
    { text: "appreciate", id: 10 },
  ]);
  const [FilterDB, setFilterDB] = useState(dataBase);

  const searchHandler = (val) => {
    const searchDB = FilterDB.filter((element) => {
      return element.text.toLowerCase().includes(val.toLowerCase());
    });
    setDataBase(searchDB);
  };

  const alphaSorthandler = () => {
    const alphaSort = [...dataBase].sort((prev, next) =>
    prev.text > next.text ? 28 : -28
    );
    setDataBase(alphaSort);
  };

  const defaultSortHandler = () => {
    const defaultSort = [...dataBase].sort((prev, next) =>
      prev.id > next.id ? 28 : -28
    );
    setDataBase(defaultSort)
  };

  return (
    <div className="App">
      <SearchOptions
        searchHandler={searchHandler}
        alphaSorthandler={alphaSorthandler}
        defaultSortHandler = {defaultSortHandler}
      />
      <Filter arr={dataBase} />
    </div>
  );
}
export default App;
