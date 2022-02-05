import { Container } from "./styles";
import { memo, useState } from "react";
import Modal from "../Modal";

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
  const [modalOpen, setModalOpen] = useState(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  console.log("imagem: ", img);
  return (
    <Container img={img} onClick={setIsOpen}>
      <a href={link} target="_blank">
        <div>
          <strong>{title}</strong>{" "}
        </div>
      </a>
      <Modal isOpen={modalOpen} setIsOpen={() => toggleModal()}>
        alo
      </Modal>
    </Container>
  );
}

export default memo(PortfolioItem);
