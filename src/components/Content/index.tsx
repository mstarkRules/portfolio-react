import { PortfolioItem } from "../PortfolioItem";
import { Container, Conteudo } from "./styles";
import { PortfolioList } from "../../data/listPortfolio";

export function Content() {
  const lista = PortfolioList;

  return (
    <Container>
      <h2>Projetos</h2>
      <Conteudo>
        {lista.map((item) => {
          return (
            <PortfolioItem
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
