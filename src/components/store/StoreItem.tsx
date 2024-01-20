import { StoreService } from "../../services/StoreService";
import "./StoreItem.css";

export default function StoreItem(props: {
  product: any;
  setSelectedProduct: any;
  setStores: any;
}) {
  let isLoading: boolean = false;

  const getSpecificProduct = async (ean: string) => {
    const data = await StoreService.getProduct(ean);
    const prods = data["data"]["products"];
    var stores: { [x: string]: string }[] = [];
    prods.map((product: any) => {
      try {
        const storeName = product["store"]["name"];
        const storePrice = product["current_price"]["price"];
        if (storeName && storePrice) {
          stores.push({
            name: storeName,
            price: storePrice,
          });
        }
      } catch (error) {
        console.warn("Name is null");
      }
    });
    return stores;
  };

  const handleClick = async () => {
    isLoading = true;
    props.setSelectedProduct(props.product);
    props.setStores([]);
    if (props.product["ean"])
      props.setStores(await getSpecificProduct(props.product["ean"]));
    else console.warn("No EAN on product");
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
          objectFit: "cover",
          width: "100%",
          height: "300px",
        }}
      />
      <div className="card-body store-item-body">
        <p className="card-title">{props.product["name"]}</p>
        <h4 className="card-text">{props.product["current_price"]} kr</h4>
      </div>
    </div>
  );
}
