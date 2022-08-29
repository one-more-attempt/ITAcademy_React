import "./table-row.css";

export function TableRow(props) {
  return (
    <div className="row-wrapper">
      <div className="item-name-wrapper">
        <span className="item-category">{props.category}:</span>
        <p className="">{props.name}</p>
      </div>
      <div className="item-price">{props.price} $</div>
      <div className="number-of-items">{props.quantity} pc</div>
      <div className="item-pic">
        <img src={props.imgURL} alt="" />
        {props.picURL}
      </div>
    </div>
  );
}
