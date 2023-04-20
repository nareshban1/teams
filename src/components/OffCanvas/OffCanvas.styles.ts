import styled from "styled-components";

export const OffCanvasContainer = styled.div`
  background: #ffffff 0% 0%;
  width: 31.25rem;
  background-color: white;
  padding: 1.875rem;
  height: 100%;
  box-shadow: 0px -5px 15px #1201030f;
  display: flex;
  flex-direction: column;
`;

export const OffCanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
`;

export const OffCanvasBody = styled.div`
  flex-grow: 1;
`;
