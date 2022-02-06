import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
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
export const SlideFooter = styled.footer`
  display: flex;
  flex-direction: row;

  justify-content: center;

  height: 60px;
`;
