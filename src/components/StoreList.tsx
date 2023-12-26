import { useState } from "react";
import "./StoreList.css";
import { useNavigate } from "react-router-dom";
import { StoreService } from "../services/StoreService";

export default function StoreList() {
  const _storeService: StoreService = new StoreService();

  const [searchStore, setSearchStore] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex-col justify-content-center">
        <div className="input-group mb-3">
          <span className="input-group-text bi-search"></span>
          <input
            type="text"
            name="store-search"
            className="form-control"
            placeholder="Finn din butikk.."
            onChange={(e) => setSearchStore(e.target.value)}
          />
        </div>
        <ul className="d-flex flex-row flex-wrap justify-content-center gap-3">
          {_storeService
            .getAvailableStores()
            .filter((store) =>
              store.name.toLowerCase().includes(searchStore.toLowerCase())
            )
            .map((store) => (
              <li
                key={store.name}
                style={{ cursor: "pointer", width: "15rem" }}
                className="list-group-item card text-center"
                onClick={() => navigate(`store/${store.name}`)}
              >
                <img src={store.imageAddress} className="card-img-top" />
                <div className="card-body">
                  <h1 className="card-title">{store.name}</h1>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
