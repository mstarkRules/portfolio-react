import { Container } from "./styles";
import { memo } from "react";

interface PortifolioItemProps {
  title: string;
  img: string;
  description: string;
  link: string;
}

function PortfolioItem({ title, img, description, link }: PortifolioItemProps) {
  console.log("imagem: ", img);
  return (
    <Container img={img}>
      <a href={link} target="_blank">
        <div>
          <strong>{title}</strong>{" "}
        </div>
      </a>
    </Container>
  );
}

export default memo(PortfolioItem);
