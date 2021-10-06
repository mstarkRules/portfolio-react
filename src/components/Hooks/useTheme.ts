import { useContext } from "react";
import { ThemeContext } from "styled-components";

import {} from "../Contexts/ThemeContext";

export function useTheme() {
  const value = useContext(ThemeContext);

  return value;
}
