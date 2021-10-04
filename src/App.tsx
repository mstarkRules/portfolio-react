import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <div className="App">
        <Header />

        <Content />
      </div>
      <GlobalStyle />
    </>
  );
}
