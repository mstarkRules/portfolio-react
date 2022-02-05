import styled from "styled-components";

export const Container = styled.a`
  width: 100%;

  img {
    margin: 0;
    width: 920px;
    height: 600px;

    object-fit: contain;
  }

  @media (max-width: 960px) {
    img {
      width: 760px;
      height: 500px;
    }
  }
  @media (max-width: 720px) {
    img {
      width: 600px;
      height: 400px;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 480px;
      height: 300px;
    }
  }
  @media (max-width: 540px) {
    img {
      width: 100%;
    }
  }
`;
