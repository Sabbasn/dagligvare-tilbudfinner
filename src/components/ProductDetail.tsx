interface Props {
  name: string;
  description: string;
  img: string;
  stores: { [x: string]: string }[];
}

export default function ProductDetail(props: Props) {
  return (
    <div
      style={{
        position: "fixed",
        right: "0px",
        top: "60px",
        width: "auto",
        height: "auto",
        maxWidth: "450px",
      }}
      className="card m-3 p-2"
    >
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
        <ul className="list-group">
          {props.stores
            .sort((a, b) => Number(a["price"]) - Number(b["price"]))
            .map(
              (store) =>
                props.stores && (
                  <li
                    key={store["name"]}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <h1>{store["name"]}</h1>
                    <h1>{store["price"]} kr</h1>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
}
