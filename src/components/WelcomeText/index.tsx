import { useState } from "react";
import { Container } from "./style";

export function WelcomeText() {
  const [text, setText] = useState("Bem vindo");

  function animateText() {
    let arrayText = text.split("");

    let texto = "";
    for (let i = 0; i < arrayText.length; i++) {
      (function (i) {
        setTimeout(function () {
          texto += arrayText[i];
          setText(texto);
        }, 100 * i);
      })(i);
    }
  }

  return (
    <Container onClick={animateText}>
      <strong>{text}</strong>
    </Container>
  );
}
