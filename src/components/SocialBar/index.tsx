import { SocialItem } from "../SocialItem";
import { Container } from "./styles";

export function SocialBar() {
  return (
    <Container>
      <SocialItem icon="BsLinkedin" type="linkedin" link="#" />
      <SocialItem icon="BsGithub" type="github" link="#" />
      <SocialItem icon="BsWhatsapp" type="whatsapp" link="#" />
    </Container>
  );
}
