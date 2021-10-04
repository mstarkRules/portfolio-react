import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <div className="App">
        <Header />
        <h2>Meu Portfólio</h2>
      </div>
      <GlobalStyle />
    </>
  );
}
