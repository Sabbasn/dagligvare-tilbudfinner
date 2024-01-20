import { StoreButton } from "./StoreButton";
import { StoreInput } from "./StoreInput";

interface Props {
  disabled: boolean;
  onKeyDown: any;
  setSearchProduct: any;
}

export function StoreSearchBar(props: Props) {
  const handleKeyDown = (e: any) => {
    console.log(e.key);
    if (e.key === "Enter") {
      props.onKeyDown(e);
    }
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text bi-search"></span>
      <StoreInput
        onKeyDown={(e) => handleKeyDown(e)}
        setSearchProduct={props.setSearchProduct}
      />
      <StoreButton disabled={props.disabled} onClick={props.onKeyDown} />
    </div>
  );
}
