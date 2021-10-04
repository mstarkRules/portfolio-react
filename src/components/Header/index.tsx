import { Container, Content } from "./styles";

import wallpaper from "../../assets/wallpaper.jpg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={wallpaper} alt="" />
      </Content>
    </Container>
  );
}
