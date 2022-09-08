import { useState } from "react";
import { Item } from "../Item/Item";
export function Filter(props) {
  return (
    <div className="elements">
      {props.arr.map((element) => {
        return <Item key={element.id} item={element}></Item>;
      })}
    </div>
  );
}
