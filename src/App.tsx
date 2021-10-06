import { ProjectsSection } from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TopButton } from "./components/TopButton";
import { ThemeContextProvider } from "./Contexts/ThemeContext";
import { PerfilSection } from "./components/PerfilSection";

export function App() {
  return (
    <ThemeContextProvider>
      <>
        <Header />
        <PerfilSection />
        <ProjectsSection />

        <GlobalStyle />
      </>
    </ThemeContextProvider>
  );
}
