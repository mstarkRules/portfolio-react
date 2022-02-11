import styled from "styled-components";

export const Container = styled.div`
  height: auto;
`;

export const ImgList = styled.div`
  ul {
    list-style: none;

    img {
      margin: 0;
      padding: 1rem;
      width: 100%;

      max-height: calc(100vh - 13rem);

      object-fit: cover;

      @media (max-width: 540px) {
        padding: 0;
      }
    }
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  opacity: 0.5;

  transition: all ease 0.3s;
  :hover {
    /* cursor: pointer; */
    opacity: 0.5;
  }
`;

export const SlideFooter = styled.footer`
  display: flex;
  flex-direction: row;

  justify-content: center;

  height: 60px;
`;
