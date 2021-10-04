import { Container, Content } from "./styles";

import { PerfilImg } from "../PerfilImg";
import wallpaper from "../../assets/wallpaper.jpg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={wallpaper} alt="" />
        <PerfilImg />
      </Content>
    </Container>
  );
}
