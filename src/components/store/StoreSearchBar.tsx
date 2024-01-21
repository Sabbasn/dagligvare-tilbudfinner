import { StoreButton } from "./StoreButton";
import { StoreInput } from "./StoreInput";

interface Props {
  inputRef: any;
  disabled: boolean;
  onKeyDown: any;
}

export function StoreSearchBar(props: Props) {
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      props.onKeyDown(e);
    }
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text bi-search"></span>
      <StoreInput
        inputRef={props.inputRef}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <StoreButton disabled={props.disabled} onClick={props.onKeyDown} />
    </div>
  );
}
