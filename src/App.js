import { useEffect, useState } from "react";
import { Filter } from "./components/filter/filter";
import { SearchOptions } from "./components/SearchOptions/SearchOptions";
import axios from "axios";
function App() {
  const [dataBase, setDataBase] = useState([
    { title: "california", id: 1 },
    { title: "everything", id: 2 },
    { title: "aboveboard", id: 3 },
    { title: "washington", id: 4 },
    { title: "basketball", id: 5 },
    { title: "weathering", id: 6 },
    { title: "characters", id: 7 },
    { title: "literature", id: 8 },
    { title: "contraband", id: 9 },
    { title: "appreciate", id: 10 },
  ]);

  const serverURL = "https://jsonplaceholder.typicode.com/albums/";

  useEffect(() => {
    axios.get(serverURL).then((resp) => {
      console.log(resp.data);
      setDataBase(resp.data);
      setFilterDB(resp.data);
    });
  }, []);

  const [FilterDB, setFilterDB] = useState(dataBase);

  const searchHandler = (val) => {
    const searchDB = FilterDB.filter((element) => {
      return element.title.toLowerCase().includes(val.toLowerCase());
    });
    setDataBase(searchDB);
  };

  const alphaSorthandler = () => {
    const alphaSort = [...dataBase].sort((prev, next) =>
      prev.title > next.title ? 28 : -28
    );
    setDataBase(alphaSort);
  };

  const defaultSortHandler = () => {
    const defaultSort = [...dataBase].sort((prev, next) =>
      prev.id > next.id ? 28 : -28
    );
    setDataBase(defaultSort);
  };

  return (
    <div className="App">
      <SearchOptions
        searchHandler={searchHandler}
        alphaSorthandler={alphaSorthandler}
        defaultSortHandler={defaultSortHandler}
      />
      <Filter arr={dataBase} />
    </div>
  );
}
export default App;
