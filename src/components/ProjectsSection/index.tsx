import { PortfolioItem } from "../PortfolioItem";
import { Container, Conteudo } from "./styles";
import { PortfolioList } from "../../data/listPortfolio";

export function ProjectsSection() {
  const lista = PortfolioList;

  return (
    <Container>
      <h1>Projetos</h1>
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
