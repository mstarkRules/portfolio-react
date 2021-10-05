import { Container } from "./styles";

interface PortifolioItemProps {
  title: string;
  img: string;
  description: string;
  link: string;
}

export function PortfolioItem({
  title,
  img,
  description,
  link,
}: PortifolioItemProps) {
  const imagem = "/imgs/example-img.jpg";
  return (
    <Container>
      <a href={link} target="_blank">
        <div>{title}</div>
      </a>
    </Container>
  );
}
