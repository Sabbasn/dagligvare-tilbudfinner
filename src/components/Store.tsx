import { useState } from "react";
import "./StoreList.css";
import ProductDetail from "./ProductDetail";
import StoreItem from "./StoreItem";
import { StoreService } from "../services/StoreService";

export default function StoreList() {
  const [searchProduct, setSearchProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>("");
  const [products, setProducts] = useState<any[]>([]);
  const [stores, setStores] = useState<{ [x: string]: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProducts = async () => {
    setLoading(true);
    setProducts([]);
    const prods = await StoreService.getProducts(searchProduct);
    prods["data"] = prods["data"].filter((prod: any) => prod["ean"]);
    setProducts(prods["data"]);
    setLoading(false);
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
            <StoreItem
              product={product}
              setSelectedProduct={setSelectedProduct}
              setStores={setStores}
            />
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
