import { Container } from "./styles";
import { memo, useState } from "react";
import Modal from "../Modal";
import { SlideItem } from "../SlideItem";

interface PortifolioItemProps {
  title: string;
  img: string;
  description: string;
  link: string;
  listImgs: ListImgsProps[];
  setIsOpen: () => void;
}

interface ListImgsProps {
  id: number;
  item: string;
}

function PortfolioItem({
  title,
  img,
  description,
  link,
  setIsOpen,
  listImgs,
}: PortifolioItemProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
    console.log("abri o modal? ", modalOpen);
  }
  let count: number = 0;
  count = count + 1;
  console.log("imagem: ", count);
  return (
    <>
      <Container img={img} onClick={toggleModal}>
        <a>
          <div>
            <strong>{title}</strong>{" "}
          </div>
        </a>
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal}>
        <SlideItem listImgs={listImgs} link={link} title={title} />
      </Modal>
    </>
  );
}

export default memo(PortfolioItem);
