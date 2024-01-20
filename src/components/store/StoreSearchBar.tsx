import { StoreButton } from "./StoreButton";
import { StoreInput } from "./StoreInput";

interface Props {
  loading: boolean;
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
      <StoreButton disabled={props.loading} onClick={props.onKeyDown} />
    </div>
  );
}
