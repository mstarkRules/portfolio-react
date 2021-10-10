import { useContext } from "react";

import { AnimateContext } from "../contexts/AnimateContext";

export function useAnimate() {
  const context = useContext(AnimateContext);

  return context;
}
