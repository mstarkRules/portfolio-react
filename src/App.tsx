import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";
import { ThemeContextProvider } from "./components/Contexts/ThemeContext";

export function App() {
  return (
    <ThemeContextProvider>
      <>
        <Header />

        <ProjectsSection />

        <GlobalStyle />
      </>
    </ThemeContextProvider>
  );
}
