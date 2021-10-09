import { useEffect, useState } from "react";
import { Container } from "./style";

export function WelcomeText() {
  const [text, setText] = useState("Bem vind@ ao meu portfólio");
  const [clicou, setClicou] = useState(0);

  function animateText() {
    let arrayText = text.split("");

    let texto = "";
    if (clicou === 0) {
      setClicou(1);

      for (let i = 0; i < arrayText.length; i++) {
        (function (i) {
          setTimeout(function () {
            texto += arrayText[i];
            setText(texto);
            if (i === arrayText.length - 1) {
              setClicou(0);
              console.log(clicou);
            }
          }, 100 * i);
        })(i);
      }
    }
  }

  useEffect(() => {
    animateText();
  }, []);

  return (
    <Container onClick={animateText} onMouseOver={animateText}>
      <strong>{text}</strong>
    </Container>
  );
}
