import styled from "styled-components";

export const Container = styled.div`
  margin-top: -5rem;
  max-width: 17rem;

  img {
    border-radius: 8.5rem;
    border: 0.3rem solid var(--background);

    transition: all ease 0.3s;
    :hover {
      transform: scale(1.1);
    }
  }
`;
