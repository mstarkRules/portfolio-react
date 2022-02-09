import styled from "styled-components";

export const Container = styled.section`
  border-top: thin solid rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 60px;

  @media (min-width: 480px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
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

  animation: floating-text 7s linear infinite;
  @keyframes floating-text {
    0%,
    50%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(10px);
    }
    75% {
      transform: translateY(-10px);
    }
  }
  transition: all ease 0.8s;

  img {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    /* object-fit: cover; */
    :hover {
      transform: translateX(-1px);
    }
  }
`;
