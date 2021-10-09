import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #222;

  padding-bottom: 100px;

  h2 {
    padding: 10px;
  }
`;

export const Conteudo = styled.div`
  max-width: 1140px;
  gap: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 10px;
  padding-left: 10px;

  @media (max-width: 580px) {
    justify-content: center;
  }

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 1140px) {
    justify-content: center;
  }
`;
