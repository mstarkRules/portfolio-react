import styled from "styled-components";

export const Container = styled.a`
  width: 100%;
  display: block;

  img {
    margin: 0;
    padding: 1rem;
    width: 100%;
    max-height: 600px;

    object-fit: cover;

    @media (max-width: 540px) {
      padding: 0;
    }
  }
`;
