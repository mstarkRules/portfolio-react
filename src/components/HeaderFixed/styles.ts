import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: fixed;

  div {
    display: flex;
    li {
      list-style: none;

      div {
        transition: all ease 0.5s;
        /* height: calc(100% - 10px); */
        :hover {
          filter: opacity(0.5);
          border-bottom: 3px solid rgba(0, 0, 0, 0.5);
          border-collapse: separate;
          height: calc(100%);
        }
      }
    }

    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const HamburguerArea = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;

  @media (min-width: 720px) {
    display: none;
  }
`;
