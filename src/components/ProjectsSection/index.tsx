import PortfolioItem from "../PortfolioItem";
import { Container, Conteudo } from "./styles";
import { PortfolioList } from "../../data/listPortfolio";
import { useAnimate } from "../../hooks/useAnimate";

export function ProjectsSection() {
  const { animateText, text } = useAnimate();

  const lista = PortfolioList;
  function handleAnimateText() {
    animateText("Meus projetos");
  }

  return (
    <Container>
      <h1>Meus Projetos</h1>
      <Conteudo>
        {lista.map((item) => {
          return (
            <PortfolioItem
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </Conteudo>
    </Container>
  );
}
