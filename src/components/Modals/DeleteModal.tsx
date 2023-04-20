import React, { ReactNode } from "react";
import {
  ModalBody,
  ModalButton,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styles";
import { ActionIconContainer } from "../Table/Table.styles";
import { RxCross2 } from "react-icons/rx";

interface IModalProps {
  modalTitle: string;
  modalBody: ReactNode;
  onCancel?: () => void;
  onSubmit: () => void;
  toggleModal: () => void;
  isOpen: boolean;
}
const DeleteModal = ({
  modalBody,
  modalTitle,
  onCancel,
  onSubmit,
  toggleModal,
  isOpen,
}: IModalProps) => {
  if (!isOpen) return null;
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
          <ActionIconContainer
            background="#F71E1E1A"
            color="#F7541E"
            border="#F71E1E1A"
            onClick={toggleModal}
          >
            <RxCross2 size={16} />
          </ActionIconContainer>
        </ModalHeader>
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>
          <ModalButton
            background="#F71E1E"
            onClick={() => {
              onSubmit();
              toggleModal();
            }}
          >
            Delete
          </ModalButton>
          <ModalButton
            background="#1E83F7"
            onClick={() => {
              onCancel && onCancel();
              toggleModal();
            }}
          >
            Cancel
          </ModalButton>
        </ModalFooter>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default DeleteModal;
