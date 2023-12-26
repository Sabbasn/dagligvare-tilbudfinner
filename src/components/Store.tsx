import { useParams } from "react-router-dom";

export default function Store() {
  const { name } = useParams();
  return (
    <>
      <div className="container-sm d-flex justify-content-center">
        <h1 className="">{name}</h1>
      </div>
    </>
  );
}
