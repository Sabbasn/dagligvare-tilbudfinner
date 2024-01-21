import { KeyboardEventHandler } from "react";

interface Props {
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  inputRef: any;
}

export function StoreInput(props: Props) {
  return (
    <input
      ref={props.inputRef}
      type="text"
      name="store-search"
      className="form-control"
      placeholder="Finn din vare..."
      onKeyDown={(e) => props.onKeyDown(e)}
    />
  );
}
