import { useEffect, useState } from "react";
import "./css/StoreItemDetail.css";

interface Props {
  name: string;
  description: string;
  img: string;
  stores: { [x: string]: string }[];
  setIsHidden?: any;
}

export default function StoreItemDetail(props: Props) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsHidden(false);
  }, [props.name]);

  return (
    <div
      style={{
        display: isHidden ? "none" : "flex",
      }}
      className="card p-2 store-item-detail"
    >
      <button
        className="btn btn-close"
        onClick={() => setIsHidden(true)}
        style={{
          position: "fixed",
          right: "25px",
          float: "right",
          width: "32px",
        }}
      />
      <img
        src={props.img}
        className="store-item-detail-img card-img-top p-2"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "250px",
          maxHeight: "250px",
          margin: "0 auto",
        }}
      />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <ul className="list-group">
          {props.stores.length === 0 && <h1>Laster...</h1>}
          {props.stores
            .sort((a, b) => Number(a["price"]) - Number(b["price"]))
            .map(
              (store) =>
                props.stores && (
                  <li
                    key={store["name"]}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <h3>{store["name"]}</h3>
                    <h3>{store["price"]} kr</h3>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
}
