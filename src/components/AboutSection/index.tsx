import React from "react";
import { content } from "../../data/content";
import perfil from "../../assets/baloon.svg";

import { Wrapper } from "../Wrapper";

import { Container, Content, AboutContent, AboutImageBox } from "./styles";

const AboutSection = () => {
  return (
    <Container id="about">
      <Content>
        <Wrapper>
          <Wrapper data-aos="zoom-in">
            <h1>Sobre Mim</h1>
          </Wrapper>

          <AboutContent>
            <Wrapper>
              <AboutImageBox>
                <img src={perfil} alt="" />
              </AboutImageBox>
            </Wrapper>
            <Wrapper>
              <p>{content.about.split(")!")[0]})!</p>
              <p>{content.about.split(")!")[1]})!</p>
            </Wrapper>
          </AboutContent>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default AboutSection;
