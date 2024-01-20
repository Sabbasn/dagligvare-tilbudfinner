import { StoreButton } from "./StoreButton";
import { StoreInput } from "./StoreInput";

interface Props {
  disabled: boolean;
  onKeyDown: any;
  setSearchProduct: any;
}

export function StoreSearchBar(props: Props) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text bi-search"></span>
      <StoreInput
        onKeyDown={props.onKeyDown}
        setSearchProduct={props.setSearchProduct}
      />
      <StoreButton disabled={props.disabled} onClick={props.onKeyDown} />
    </div>
  );
}
