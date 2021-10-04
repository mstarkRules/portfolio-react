import { PortfolioItem } from "../PortfolioItem";
import { Container } from "./styles";
import { PortfolioList } from "../../data/listPortfolio";

export function Content() {
  const lista = PortfolioList;

  return (
    <Container>
      {lista.map((item) => {
        return (
          <PortfolioItem
            title={item.title}
            img={item.img}
            description={item.description}
          />
        );
      })}
    </Container>
  );
}
