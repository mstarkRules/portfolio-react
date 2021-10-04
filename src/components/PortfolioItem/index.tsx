import { Container } from "./styles";

interface PortifolioItemProps {
  title: string;
  img: string;
  description: string;
}

export function PortfolioItem({
  title,
  img,
  description,
}: PortifolioItemProps) {
  const imagem = "/imgs/example-img.jpg";
  return (
    <Container>
      <h1>{title}</h1>
      <img src={img} alt="Imagem do projeto" />
      <p>{description}</p>
    </Container>
  );
}
