import { Route, Routes } from "react-router-dom";
import "./App.css";
import StoreList from "./components/StoreList";
import Store from "./components/Store";

function App() {
  return (
    <>
      <div className="container-sm p-3">
        <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/store/:name" element={<Store />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
