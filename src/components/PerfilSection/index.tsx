import { SocialItem } from "../SocialItem";
import { Container } from "./styles";
import { ImLocation } from "react-icons/im";
export function PerfilSection() {
  return (
    <Container>
      <h1>Marcos Paulo Amorim</h1>
      <p>Desenvolvedor Front-end - ReactJS</p>
      <strong>
        <ImLocation /> Curitiba - PR
      </strong>
    </Container>
  );
}
