import { useState } from "react";
import "./Store.css";
import StoreItemDetail from "./StoreItemDetail";
import StoreItem from "./StoreItem";
import { StoreService } from "../../services/StoreService";
import { StoreSearchBar } from "./StoreSearchBar";

export default function Store() {
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
      <StoreSearchBar
        setSearchProduct={setSearchProduct}
        loading={loading}
        onKeyDown={getAllProducts}
      />
      <div className="d-flex-col">
        {loading && <h1>Laster inn varer...</h1>}
        <ul className="d-flex flex-row gap-2 flex-wrap">
          {products.map((product) => (
            <StoreItem
              product={product}
              setSelectedProduct={setSelectedProduct}
              setStores={setStores}
              key={product["id"]}
            />
          ))}
        </ul>
      </div>
      {selectedProduct && (
        <StoreItemDetail
          name={selectedProduct["name"]}
          description={selectedProduct["description"]}
          img={selectedProduct["image"]}
          stores={stores}
        />
      )}
    </>
  );
}
