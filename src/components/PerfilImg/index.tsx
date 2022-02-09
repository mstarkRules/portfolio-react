import perfil from "../../assets/mp.jpg";
import { Container } from "./styles";

export function PerfilImg() {
  return (
    <a href="#about">
      <Container>
        <img src={perfil} alt="" />
      </Container>
    </a>
  );
}
