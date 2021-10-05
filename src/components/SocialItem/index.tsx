import { Container } from "./styles";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
interface SocialItemProps {
  icon: string;
  type: string;
  link: string;
}

export function SocialItem({ icon, type, link }: SocialItemProps) {
  return (
    <>
      <Container type={type}>
        <a href={link} target="_blank">
          <h1>
            {icon === "BsLinkedin" && <BsLinkedin />}
            {icon == "BsWhatsapp" && <BsWhatsapp />}
            {icon == "BsGithub" && <BsGithub />}
          </h1>
        </a>
      </Container>
    </>
  );
}
