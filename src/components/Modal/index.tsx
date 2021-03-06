import React, { ReactNode, useEffect, useState } from "react";

import ReactModal from "react-modal";

import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export function Modal(props: ModalProps) {
  const isOpen = props.isOpen;
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(props.isOpen);
  }, [isOpen]);

  console.log("estou aberto? ", modalStatus);
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={props.setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      //   preventScroll={true}
      //   shouldFocusAfterRender={true}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#f0f0f5",
          color: "#000",
          borderRadius: "8px",
          maxWidth: "100%",
          padding: 0,
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {props.children}
    </ReactModal>
  );
}

export default Modal;
