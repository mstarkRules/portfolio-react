import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4d4762;
  padding-bottom: 100px;
  padding-top: 40px;

  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: -50px;

  h1 {
    padding: 30px;
    color: white;
    transition: all ease 0.1s;
    @media (min-width: 980px) {
      :hover {
        transform: rotate(-1deg);
      }
    }
  }
`;

export const Conteudo = styled.div`
  max-width: 100%;
  background-color: #4d4762;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding-right: 10px;
  padding-left: 10px;

  @media (max-width: 1140px) {
    justify-content: center;
  }

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 580px) {
    justify-content: center;
  }
`;
