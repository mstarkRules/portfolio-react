import { SocialItem } from "../SocialItem";
import { Container } from "./styles";
import { ImLocation } from "react-icons/im";
import { SocialBar } from "../SocialBar";
import WelcomeText from "../WelcomeText";
export function PerfilSection() {
  return (
    <Container>
      <h1>Marcos Paulo Amorim</h1>
      <p>Desenvolvedor de Software - ReactJS | Python | AWS</p>
      <strong>
        <ImLocation /> São José dos Pinhais - PR
      </strong>
      <WelcomeText />
      <SocialBar />
    </Container>
  );
}
