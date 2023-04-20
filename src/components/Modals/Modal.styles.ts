import styled from "styled-components";

export const ModalContainer = styled.div`
  background: #ffffff 0% 0%;
  border-radius: 0.313rem;
  width: 31.25rem;
  background-color: white;
  padding: 1.875rem;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #24252a80 0% 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalBody = styled.div`
  width: 100%;
  margin: 1rem 0;
`;
export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const ModalTitle = styled.div`
  color: #24252a;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const ModalButton = styled.button<{ background: string }>`
  display: flex;
  border-radius: 0.313rem;
  background-color: ${(props) => props.background};
  outline: none;
  border: none;
  align-items: center;
  padding: 0.5rem 1.5rem;
  color: white;
  gap: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  flex-grow: 0;
  width: auto;
`;
