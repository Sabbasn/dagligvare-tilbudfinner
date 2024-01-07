import { useState } from "react";
import { StoreService } from "../services/StoreService";
import "./StoreList.css";
import ProductDetail from "./ProductDetail";

export default function StoreList() {
  const [searchProduct, setSearchProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>("");
  const [products, setProducts] = useState<any[]>([]);
  const [stores, setStores] = useState<{ [x: string]: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  var isLoading: boolean = false;

  const getAllProducts = async () => {
    setLoading(true);
    setProducts([]);
    const prods = await StoreService.getProducts(searchProduct);
    prods["data"] = prods["data"].filter((prod: any) => prod["ean"]);
    setProducts(prods["data"]);
    setLoading(false);
  };

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

  return (
    <>
      <div className="d-flex-col">
        <div className="input-group mb-3">
          <span className="input-group-text bi-search"></span>
          <input
            type="text"
            name="store-search"
            className="form-control"
            placeholder="Finn din vare..."
            onChange={(e) => setSearchProduct(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                getAllProducts();
              }
            }}
          />
          <button
            className="btn btn-primary"
            style={{ color: "white" }}
            onClick={getAllProducts}
            disabled={loading}
          >
            Hent
          </button>
        </div>
        {loading && <h1>Laster inn varer...</h1>}
        <ul className="d-flex flex-row flex-wrap gap-3">
          {products.map((product) => (
            <li
              onClick={async () => {
                isLoading = true;
                setSelectedProduct(product);
                setStores([]);
                if (product["ean"])
                  setStores(await getSpecificProduct(product["ean"]));
                else console.warn("No EAN on product");
                isLoading = false;
              }}
              key={product["id"]}
              style={{
                cursor: "pointer",
                width: "15rem",
                borderRadius: "0.6rem",
              }}
              className="list-group-item card text-center p-3 d-flex align-content-evenly"
            >
              <img
                src={product["image"]}
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
                <h3 className="card-title">{product["name"]}</h3>
                <h4 className="card-text">{product["current_price"]} kr</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedProduct && (
        <ProductDetail
          name={selectedProduct["name"]}
          description={selectedProduct["description"]}
          img={selectedProduct["image"]}
          stores={stores}
        />
      )}
    </>
  );
}
