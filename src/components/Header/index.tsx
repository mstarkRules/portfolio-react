import { Container, Content } from "./styles";

import { PerfilImg } from "../PerfilImg";
import wallpaper from "../../assets/wallpaper.jpg";
import { Sidebar } from "../Sidebar";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
  // const { theme, toggleTheme } = useTheme();
  // console.log("temaa: ", theme);
  return (
    <Container id="home">
      <Content>
        <img
          loading="lazy"
          src={wallpaper}
          alt="Imagem de capa do site. Poster do filme Interestelar. O astronauta, Cooper, sozinho com uma geleira interplanetária de fundo."
        />
        <PerfilImg />
      </Content>
    </Container>
  );
}
