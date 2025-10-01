import styled from "styled-components";

export const Container = styled.div`
  margin-top: -5rem;
  max-width: 17rem;

  img {
    border-radius: 8rem;
    border: 0.3rem solid var(--background);
    width: 16rem;
    height: 16rem;

    object-fit: cover;
    transition: all ease 0.3s;

    :hover {
      transform: scale(1.3);
    }
  }

  animation: floating-text 7s linear infinite;
  @keyframes floating-text {
    0%,
    50%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(5px);
    }
    75% {
      transform: translateY(-5px);
    }
  }
  transition: all ease 0.8s;
`;
