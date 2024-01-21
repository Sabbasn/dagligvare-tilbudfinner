import { useRef, useState } from "react";
import "./css/Store.css";
import StoreItemDetail from "./StoreItemDetail";
import StoreItem from "./StoreItem";
import { StoreSearchBar } from "./StoreSearchBar";
import { useGetProducts } from "@services/StoreService";

export default function Store() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>("");
  const [products, setProducts] = useState<any[]>([]);
  const [stores, setStores] = useState<{ [x: string]: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProducts = async () => {
    setLoading(true);
    setProducts([]);
    const prods = await useGetProducts(searchRef.current!.value).catch(() => {
      alert("En feil oppstod under søket ditt.");
      setLoading(false);
    });
    prods["data"] = prods["data"].filter((prod: any) => prod["ean"]);
    setProducts(prods["data"]);
    setLoading(false);
  };

  return (
    <>
      <StoreSearchBar
        inputRef={searchRef}
        disabled={loading}
        onKeyDown={getAllProducts}
      />
      {loading && <h1>Laster inn varer...</h1>}
      <ul
        className="d-flex flex-row flex-wrap gap-2 justify-content-center"
        style={{ paddingLeft: "0" }}
      >
        {products
          .filter((p, i, a) => a.findIndex((t) => t["ean"] === p["ean"]) === i)
          .map((product) => (
            <StoreItem
              product={product}
              setSelectedProduct={setSelectedProduct}
              setStores={setStores}
              key={product["id"]}
            />
          ))}
      </ul>
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
