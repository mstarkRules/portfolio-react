import perfil from "../../assets/perfil.png";
import { Container } from "./styles";

export function PerfilImg() {
  return (
    <Container>
      <img src={perfil} alt="" />
    </Container>
  );
}
