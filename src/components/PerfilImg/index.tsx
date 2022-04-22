import perfil from "../../assets/mp.jpg";
import { Container } from "./styles";

export function PerfilImg() {
  return (
    <a href="#about">
      <Container>
        <img
          loading="lazy"
          src={perfil}
          alt="Imagem de about do dono do portfolio, Marcos Paulo Amorim. Ele veste uma camisa preta mangas compridas."
        />
      </Container>
    </a>
  );
}
