import { SocialItem } from "../SocialItem";
import { Container } from "./styles";

export function SocialBar() {
  return (
    <Container>
      <SocialItem size="medium" icon="BsLinkedin" type="linkedin" link="#" />
      <SocialItem size="medium" icon="BsGithub" type="github" link="#" />
      <SocialItem size="medium" icon="BsWhatsapp" type="whatsapp" link="#" />
    </Container>
  );
}
