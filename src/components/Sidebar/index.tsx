import { SocialItem } from "../SocialItem";
import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <SocialItem
        type="linkedin"
        icon="BsLinkedin"
        link="https://www.linkedin.com/in/marcos-paulo-amorim-b08228160/"
      />
      <SocialItem
        type="github"
        icon="BsGithub"
        link="https://github.com/mstarkRules"
      />
      <SocialItem
        type="whatsapp"
        icon="BsWhatsapp"
        link="https://api.whatsapp.com/send?phone=+559391653757"
      />
    </Container>
  );
}
