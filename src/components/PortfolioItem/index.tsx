import { Container } from "./styles";
import { memo } from "react";

interface PortifolioItemProps {
  title: string;
  img: string;
  description: string;
  link: string;
  setIsOpen: () => void;
}

function PortfolioItem({
  title,
  img,
  description,
  link,
  setIsOpen,
}: PortifolioItemProps) {
  console.log("imagem: ", img);
  return (
    <Container img={img} onClick={setIsOpen}>
      <a href={link} target="_blank">
        <div>
          <strong>{title}</strong>{" "}
        </div>
      </a>
    </Container>
  );
}

export default memo(PortfolioItem);
