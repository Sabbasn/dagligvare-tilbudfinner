import { KeyboardEventHandler } from "react";

interface Props {
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  setSearchProduct: any;
}

export function StoreInput(props: Props) {
  return (
    <input
      type="text"
      name="store-search"
      className="form-control"
      placeholder="Finn din vare..."
      onChange={(e) => props.setSearchProduct(e.target.value)}
      onKeyDown={(e) => props.onKeyDown(e)}
    />
  );
}
