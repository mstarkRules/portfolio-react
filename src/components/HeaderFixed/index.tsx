import React from "react";

import { Wrapper } from "../Wrapper";
import { Nav } from "./styles";

const HeaderFixed = () => {
  return (
    <Nav>
      <li>
        <a href="#home">
          <Wrapper padding color="white">
            Home
          </Wrapper>
        </a>
      </li>
      <li>
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
      <li>
        <a href="#contact">
          <Wrapper padding color="white">
            Contato
          </Wrapper>
        </a>
      </li>
    </Nav>
  );
};

export default HeaderFixed;
