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
  console.log("imagem: ", img);
  return (
    <Container img={img}>
      <a href={link} target="_blank">
        <div>{title}</div>
      </a>
    </Container>
  );
}
