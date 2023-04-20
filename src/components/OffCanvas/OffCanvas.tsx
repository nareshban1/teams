import React, { ReactNode } from "react";
import { ModalHeader, ModalTitle } from "../Modals/Modal.styles";
import { ActionIconContainer } from "../Table/Table.styles";
import { RxCross2 } from "react-icons/rx";
import {
  OffCanvasBody,
  OffCanvasContainer,
  OffCanvasWrapper,
} from "./OffCanvas.styles";
interface IModalProps {
  title: string;
  body: ReactNode;
  toggleModal: () => void;
  isOpen: boolean;
}
const OffCanvas = ({ body, title, toggleModal, isOpen }: IModalProps) => {
  if (!isOpen) return null;
  return (
    <OffCanvasWrapper>
      <OffCanvasContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ActionIconContainer
            background="#F71E1E1A"
            color="#F7541E"
            border="#F71E1E1A"
            onClick={toggleModal}
          >
            <RxCross2 size={16} />
          </ActionIconContainer>
        </ModalHeader>
        <OffCanvasBody>{body}</OffCanvasBody>
      </OffCanvasContainer>
    </OffCanvasWrapper>
  );
};

export default OffCanvas;
