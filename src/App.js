import logo from "./logo.svg";
import "./App.css";
import { TableRow } from "./components/Product/Product";
import { Header } from "./components/Store/Store";

function App() {
  const ShopName = 'iShop2';
  const dataBase = [
    {
      id: 1,
      category: "Smartphone",
      name: "Google Pixel",
      price: 250,
      quantityLeft: 15,
      pictureURL: "https://www.computerhope.com/jargon/n/notebook.jpg",
    },
    {
      id: 2,
      category: "Notebook",
      name: "Dell",
      price: 200,
      quantityLeft: 12,
      pictureURL: "https://www.computerhope.com/jargon/n/notebook.jpg",
    },
    {
      id: 3,
      category: "Smart-watch",
      name: "Samsung",
      price: 100,
      quantityLeft: 15,
      pictureURL: "https://www.computerhope.com/jargon/n/notebook.jpg",
    },
    {
      id: 4,
      category: "Keyboard",
      name: "Gigabyte",
      price: 50,
      quantityLeft: 10,
      pictureURL: "https://www.computerhope.com/jargon/n/notebook.jpg",
    },
  ];

  return (
    <div className="App">
  <Header shopName = {ShopName}/>
      {dataBase.map((item) => {
        return (
          <TableRow
            category={item.category}
            name={item.name}
            price={item.price}
            quantity={item.quantityLeft}
            imgURL={item.pictureURL}
            key = {item.id}
          />
        );
      })}
    </div>
  );
}

export default App;
