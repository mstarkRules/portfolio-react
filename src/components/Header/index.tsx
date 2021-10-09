import { Container, Content } from "./styles";

import { PerfilImg } from "../PerfilImg";
import wallpaper from "../../assets/wallpaper.jpg";
import { Sidebar } from "../Sidebar";
import { useTheme } from "../../Hooks/useTheme";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  console.log("temaa: ", theme);
  return (
    <Container>
      <Content>
        <img src={wallpaper} alt="" />
        <PerfilImg />
      </Content>
    </Container>
  );
}
