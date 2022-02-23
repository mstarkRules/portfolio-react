import React, { useState } from "react";

import { PortfolioList } from "../../data/listPortfolio";
import { Footer } from "../Footer";
import { SocialBar } from "../SocialBar";
import { SocialItem } from "../SocialItem";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Wrapper } from "../Wrapper";

import { Container, SlideFooter, Arrow, ImgList } from "./styles";

import perfil from "../../assets/mp.jpg";

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
  const [scrollX, setScrollX] = useState(50);

  function moveLeft() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function moveRight() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 1030 * 3;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }

    setScrollX(x);
    console.log("tamanho da teka: ", window.innerWidth);
  }
  return (
    <Container>
      <Wrapper fontSize="big" strong padding>
        {title}
      </Wrapper>
      <ImgList>
        <ul>
          <div>
            <li style={{ transform: `translateX(${scrollX}px)` }}>
              <div>
                <img
                  src={listImgs[2].item}
                  alt="image"
                  title="Ir para o link"
                />
              </div>
            </li>
            <li style={{ transform: `translateX(${scrollX}px)` }}>
              <div>
                <img
                  src={listImgs[2].item}
                  alt="image"
                  title="Ir para o link"
                />
              </div>
            </li>
            <li style={{ transform: `translateX(${scrollX}px)` }}>
              <div>
                <img
                  src={listImgs[2].item}
                  alt="image"
                  title="Ir para o link"
                />
              </div>
            </li>
          </div>
        </ul>

        <Arrow>
          <div onClick={moveLeft}>
            <BiLeftArrow />
          </div>
          <div onClick={moveRight}>
            <BiRightArrow />
          </div>
        </Arrow>
      </ImgList>

      <SlideFooter>
        <SocialItem
          title="Ver no github"
          icon="BsGithub"
          size="medium"
          type="github"
          link={link}
        />
      </SlideFooter>
    </Container>
  );
}
