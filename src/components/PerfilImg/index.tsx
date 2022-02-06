import perfil from "../../assets/mp.jpg";
import { Container } from "./styles";

export function PerfilImg() {
  return (
    <Container>
      <img src={perfil} alt="" />
    </Container>
  );
}
