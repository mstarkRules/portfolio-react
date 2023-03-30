import { SocialItem } from "../SocialItem";
import { Container } from "./styles";

export function SocialBar() {
  return (
    <Container>
      <SocialItem
        size="medium"
        icon="BsLinkedin"
        type="linkedin"
        title="open linkedin"
        link="https://www.linkedin.com/in/marcos-paulo-amorim-b08228160/"
      />
      <SocialItem
        size="medium"
        icon="BsGithub"
        type="github"
        title="view github"
        link="https://github.com/mstarkRules"
      />
      <SocialItem
        size="medium"
        icon="BsWhatsapp"
        type="whatsapp"
        title="send message on WhatsApp"
        link="https://wa.me/5593991653757"
      />
      <SocialItem
        size="medium"
        icon="BsTelephone"
        type="phone"
        title="call phone number"
        link="tel:+5541988993521"
      />
    </Container>
  );
}
