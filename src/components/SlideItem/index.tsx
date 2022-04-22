import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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
  listVideos?: ListVideosProps[];
  link: string;
  title: string;
}

interface ListImgsProps {
  id: number;
  item: string;
}

interface ListVideosProps {
  id: number;
  item: string;
}

export function SlideItem({
  listImgs,
  listVideos,
  link,
  title,
}: SlideItemProps) {
  return (
    <Container>
      <Wrapper fontSize="big" strong padding>
        {title}
      </Wrapper>
      <ImgList>
        <Splide
          aria-label="Carousel"
          options={{
            width: 900,
          }}
        >
          {listImgs.map((item) => {
            return (
              <SplideSlide>
                <img src={item.item} loading="lazy" />
              </SplideSlide>
            );
          })}
          {listVideos?.map((item) => {
            return (
              <SplideSlide>
                <video
                  src={item.item}
                  autoPlay
                  loop
                  controls
                  muted
                  style={{ width: "100%" }}
                />
              </SplideSlide>
            );
          })}
        </Splide>
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
