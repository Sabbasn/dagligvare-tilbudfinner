"use client";
import { MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler;
  disabled: boolean;
}

export function StoreButton(props: Props) {
  return (
    <button
      className="btn btn-primary"
      style={{ color: "white" }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Hent
    </button>
  );
}
