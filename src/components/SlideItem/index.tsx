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

export function SlideItem({ listImgs }: SlideItemProps) {
  return (
    <Container>
      <img src={listImgs[2].item} alt="" />
    </Container>
  );
}
