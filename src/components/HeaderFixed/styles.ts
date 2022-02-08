import styled from "styled-components";

interface MenuProps {
  isMenuOpen: boolean;
}

export const Nav = styled.nav<MenuProps>`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;

  div {
    display: flex;
    li {
      list-style: none;

      div {
        transition: all ease 0.5s;
        :hover {
          filter: opacity(0.5);
          border-bottom: 3px solid rgba(0, 0, 0, 0.5);
          border-collapse: separate;
          height: calc(100%);
        }
      }
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const HamburguerArea = styled.span<MenuProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: ${(props) => (props.isMenuOpen ? "auto" : "60px")};

  list-style: none;

  :hover {
    cursor: pointer;
  }

  div {
    li {
      display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    }
  }

  @media (min-width: 720px) {
    display: none;
  }
`;
