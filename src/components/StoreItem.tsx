import { StoreService } from "../services/StoreService";

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
    <li
      onClick={handleClick}
      key={props.product["id"]}
      style={{
        cursor: "pointer",
        width: "15rem",
        borderRadius: "0.6rem",
      }}
      className="list-group-item card text-center p-3 d-flex align-content-evenly"
    >
      <img
        src={props.product["image"]}
        className="card-img-top"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "150px",
          maxHeight: "150px",
          margin: "0 auto",
        }}
      />
      <div className="card-body">
        <h3 className="card-title">{props.product["name"]}</h3>
        <h4 className="card-text">{props.product["current_price"]} kr</h4>
      </div>
    </li>
  );
}
