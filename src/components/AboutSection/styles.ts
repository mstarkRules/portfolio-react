import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 60px;

  /* background-color: blue; */
`;

export const Content = styled.div`
  /* background-color: blue; */
  display: flex;

  max-width: 1140px;
  text-align: center;
  padding: 1rem;

  @media (max-width: 1200px) {
    max-width: 720px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2rem;

  p {
    padding-top: 1rem;
    text-align: justify;
    line-height: 30px;
    /* margin-left: 3rem; */
    margin-left: 8rem;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin: 0;
    }
  }
`;

export const AboutImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    border-radius: 125px;
  }
`;
