import { useEffect, useState } from "react";

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
        position: "fixed",
        right: "0px",
        top: "60px",
        width: "auto",
        height: "auto",
        maxWidth: "450px",
      }}
      className="card m-3 p-2"
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
      ></button>
      <img
        src={props.img}
        className="card-img-top p-2"
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
        <ul
          className="list-group"
          style={{ maxHeight: "300px", overflowY: "scroll" }}
        >
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
