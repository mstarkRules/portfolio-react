import React from "react";
import { content } from "../../data/content";
import perfil from "../../assets/perfil.png";

import { Wrapper } from "../Wrapper";

import { Container, Content, AboutContent, AboutImageBox } from "./styles";

const AboutSection = () => {
  return (
    <Container id="about">
      <Content>
        <Wrapper data-aos="zoom-in">
          <h1>Sobre Mim</h1>
          <AboutContent>
            <AboutImageBox>
              <img src={perfil} alt="" />
            </AboutImageBox>
            <p>{content.about}</p>
          </AboutContent>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default AboutSection;
