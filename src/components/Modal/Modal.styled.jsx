import styled from '@emotion/styled';

export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  padding: 20px;
  ${'' /* max-width: 80%;
  max-height: 80%; */}
  overflow: auto;
  position: relative;
  width: 541px;
  height: 752px;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  cursor: pointer;
  font-size: 24px;
  background-color: white;
  color: rgba(18, 20, 23, 1);
  width: 12px;
  height: 12px;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

