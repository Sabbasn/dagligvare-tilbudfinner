import { useGetSpecificProduct } from "@services/StoreService";
import "./css/StoreItem.css";

interface StoreItemProps {
  product: any;
  setSelectedProduct: any;
  setStores: any;
}

export default function StoreItem(props: StoreItemProps) {
  let isLoading: boolean = false;

  const handleClick = async () => {
    isLoading = true;
    props.setSelectedProduct(props.product);
    props.setStores([]);
    if (props.product["ean"]) {
      props.setStores(await useGetSpecificProduct(props.product["ean"]));
    } else console.warn("No EAN on product");
    isLoading = false;
  };

  return (
    <div
      onClick={handleClick}
      key={props.product["id"]}
      style={{
        cursor: "pointer",
        width: "15rem",
        borderRadius: "0.6rem",
      }}
      className="store-item card text-center"
    >
      <img
        src={props.product["image"]}
        className="card-img-top"
        style={{
          objectFit: "contain",
          width: "100%",
          height: "300px",
        }}
      />
      <div className="store-item-body card-body">
        <p className="card-title">{props.product["name"]}</p>
        <h4 className="card-text">{props.product["current_price"]} kr</h4>
      </div>
    </div>
  );
}
