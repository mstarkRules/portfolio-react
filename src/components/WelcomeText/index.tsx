import { useEffect, useState } from "react";
import { useAnimate } from "../../hooks/useAnimate";
import { useTheme } from "../../hooks/useTheme";
import { Container } from "./style";

const WelcomeText = (): JSX.Element => {
  const { text, animateText, secondText } = useAnimate();
  const { theme } = useTheme();

  // const [text, setText] = useState("Bem vind@ ao meu portfólio");
  //const [secondText, setSecondText] = useState("white");
  const [clicou, setClicou] = useState(0);

  function handleAnimateText() {
    animateText();
  }

  return (
    <Container
      onClick={handleAnimateText}
      //onMouseOver={handleAnimateText}
      display={secondText}
    >
      <strong>{text}</strong>
      <strong className="second">_</strong>
    </Container>
  );
};

export default WelcomeText;
