import { SocialItem } from "../SocialItem";
import { Container } from "./styles";

export function SocialBar() {
  return (
    <Container>
      <SocialItem
        size="medium"
        icon="BsLinkedin"
        type="linkedin"
        link="https://www.linkedin.com/in/marcos-paulo-amorim-b08228160/"
      />
      <SocialItem
        size="medium"
        icon="BsGithub"
        type="github"
        link="https://github.com/mstarkRules"
      />
      <SocialItem
        size="medium"
        icon="BsWhatsapp"
        type="whatsapp"
        link="https://api.whatsapp.com/send?phone=+559391653757"
      />
    </Container>
  );
}
