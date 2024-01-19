import { ChangeEventHandler, MouseEventHandler, useState } from "react";

interface Props {
  onKeyDown: MouseEventHandler<HTMLButtonElement>;
  setSearchProduct: any;
}

export function StoreInput(props: Props) {
  return (
    <input
      type="text"
      name="store-search"
      className="form-control"
      placeholder="Finn din vare..."
      onChange={(e) => {
        console.log(e.target.value);
        props.setSearchProduct(e.target.value);
      }}
      onKeyDown={() => props.onKeyDown}
    />
  );
}
