import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";

export function App() {
  return (
    <>
      <div className="App">
        <Header />

        <ProjectsSection />
      </div>
      <GlobalStyle />
    </>
  );
}
