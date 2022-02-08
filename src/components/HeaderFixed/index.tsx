import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Wrapper } from "../Wrapper";
import { HamburguerArea, Nav } from "./styles";

const HeaderFixed = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function dropMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <HamburguerArea isMenuOpen={isMenuOpen} onClick={() => dropMenu()}>
        <Wrapper padding>
          <GiHamburgerMenu fontSize="2rem" color="white" />
        </Wrapper>
        <div>
          <li>
            <a href="#home">
              <Wrapper padding color="white">
                Home
              </Wrapper>
            </a>
          </li>
          <li title="Em breve">
            <a href="#about">
              <Wrapper padding color="white">
                Sobre mim
              </Wrapper>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Wrapper padding color="white">
                Projetos
              </Wrapper>
            </a>
          </li>
        </div>
      </HamburguerArea>
      <Nav isMenuOpen={isMenuOpen}>
        <div>
          <li>
            <a href="#home">
              <Wrapper padding color="white">
                Home
              </Wrapper>
            </a>
          </li>
          <li title="Em breve">
            <a href="#about">
              <Wrapper padding color="white">
                Sobre mim
              </Wrapper>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Wrapper padding color="white">
                Projetos
              </Wrapper>
            </a>
          </li>
        </div>
      </Nav>
    </>
  );
};

export default HeaderFixed;
