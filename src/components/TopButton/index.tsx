import { useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Button } from "./styles";

interface ButtonProps {
  visible: String;
}

export function TopButton() {
  const [btnVisible, setBtnVisible] = useState("none");

  window.onscroll = function () {
    displayButton();
  };
  function scrollTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function displayButton() {
    if (document.documentElement.scrollTop > 20) {
      setBtnVisible("block");
    } else {
      setBtnVisible("none");
    }
  }

  return (
    <Button onClick={scrollTop} visible={btnVisible}>
      <BsArrowUpCircleFill />
    </Button>
  );
}
