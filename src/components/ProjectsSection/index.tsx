import PortfolioItem from "../PortfolioItem";
import { Container, Conteudo } from "./styles";
import { PortfolioList } from "../../data/listPortfolio";
import { useAnimate } from "../../hooks/useAnimate";
import { useEffect, useState } from "react";
import Modal from "../Modal";

export function ProjectsSection() {
  const [displayText, setDisplayText] = useState("Meus Projetos");
  const [modalOpen, setModalOpen] = useState(false);
  const { animateText, projectText } = useAnimate();

  const lista = PortfolioList;

  useEffect(() => {
    handleAnimateText();
  }, []);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function handleAnimateText() {
    let obj = {
      displayText,
      type: "project",
    };
    animateText(obj);
  }

  return (
    <Container>
      <h1 onClick={handleAnimateText}>{projectText}</h1>
      <Conteudo>
        {lista.map((item) => {
          return (
            <PortfolioItem
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              link={item.link}
              setIsOpen={toggleModal}
            />
          );
        })}
      </Conteudo>
      <Modal isOpen={modalOpen} setIsOpen={() => toggleModal()}>
        Olaa
      </Modal>
    </Container>
  );
}
