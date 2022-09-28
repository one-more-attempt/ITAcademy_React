import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const url = "https://api.predic8.de/shop/products/15";
const shortURL = "https://api.predic8.de";
let RES = null;

export const Lychee = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setInfo(res.data);
    });
  }, []);

  return (
    <>
      {!!info && (
        <LycheeInfo
          name={info.name}
          price={info.price}
          url={`${shortURL}${info.photo_url}`}
        />
      )}
    </>
  );
};

export const LycheeInfo = ({ name, price, url }) => {
  return (
    <>
      {" "}
      <div>Item name: {name}</div>
      <div>Price: {price}</div>
      <div className="lychee">
        <img src={url} alt="" />
      </div>
    </>
  );
};
