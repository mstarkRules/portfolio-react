import React from "react";

import { PortfolioList } from "../../data/listPortfolio";

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

export function SlideItem({ listImgs, link }: SlideItemProps) {
  return (
    <Container href={link} target="_blank">
      <img src={listImgs[2].item} alt="image" title="Ir para o link" />
    </Container>
  );
}
