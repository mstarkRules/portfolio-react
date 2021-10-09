import { Container } from "./styles";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
interface SocialItemProps {
  icon: "BsLinkedin" | "BsWhatsapp" | "BsGithub";
  type: "linkedin" | "whatsapp" | "github";
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
