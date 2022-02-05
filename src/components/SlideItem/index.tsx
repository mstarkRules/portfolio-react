import React from "react";

import { PortfolioList } from "../../data/listPortfolio";
import { Wrapper } from "../Wrapper";

import { Container } from "./styles";

interface SlideItemProps {
  listImgs: ListImgsProps[];
  link: string;
  title: string;
}

interface ListImgsProps {
  id: number;
  item: string;
}

export function SlideItem({ listImgs, link, title }: SlideItemProps) {
  return (
    <Container href={link} target="_blank">
      <Wrapper>Testando</Wrapper>
      <h2>{title}</h2>
      <img src={listImgs[2].item} alt="image" title="Ir para o link" />
    </Container>
  );
}
