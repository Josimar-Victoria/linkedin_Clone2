import React from "react";
import { SoialActions } from "./styles";

export default function LikesIcons({Icons, title}) {
  return (
    <SoialActions>
      <button>
        <Icons />
        <span>{title}</span>
      </button>
    </SoialActions>
  );
}
