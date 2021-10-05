import { Container, Content } from "./styles";

import { PerfilImg } from "../PerfilImg";
import wallpaper from "../../assets/wallpaper.jpg";
import { Sidebar } from "../Sidebar";

export function Header() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <img src={wallpaper} alt="" />
        <PerfilImg />
      </Content>
    </Container>
  );
}
