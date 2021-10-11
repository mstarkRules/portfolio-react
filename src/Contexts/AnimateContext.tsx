import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AnimateProviderProps {
  children: ReactNode;
}

interface AnimateContextData {
  text: string;
  readyClick: Boolean;
  visibleColor: string;
  animateText: (displayText: string) => void;
  alternateText: () => void;
}

export const AnimateContext = createContext<AnimateContextData>(
  {} as AnimateContextData
);

export function AnimateProvider({
  children,
}: AnimateProviderProps): JSX.Element {
  const [readyClick, setReadyClick] = useState(true);

  const [text, setText] = useState(String);
  const [visibleColor, setVisibleColor] = useState("white");

  const animateText = (displayText: string) => {
    if (readyClick) {
      handleAnimateText(displayText);
    }
  };

  const handleAnimateText = (displayText: string) => {
    setText(displayText);

    let arrayText = displayText.split("");
    let texto = "";
    setReadyClick(false);

    for (let i = 0; i < arrayText.length; i++) {
      (function (i) {
        setTimeout(function () {
          texto += arrayText[i];
          setText(texto);
          if (i === arrayText.length - 1) {
            setReadyClick(true);
          }
        }, 100 * i);
      })(i);
    }
    alternateText();
  };

  useEffect(() => {
    console.log("estamos prontos? ", readyClick);
  }, [readyClick]);

  function alternateText() {
    let textos = ["", "_"];
    let texto = "";
    function change() {
      if (visibleColor === "transparent") {
        setVisibleColor("white");
      } else if (visibleColor === "white") {
        setVisibleColor("transparent");
      }
    }

    setInterval(change, 1000);
  }

  return (
    <AnimateContext.Provider
      value={{ text, readyClick, visibleColor, animateText, alternateText }}
    >
      {children}
    </AnimateContext.Provider>
  );
}
