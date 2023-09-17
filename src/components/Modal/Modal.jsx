import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, ModalClose } from './Modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer>
        <ModalClose onClick={onClose}>
          ✕
        </ModalClose>
        {children}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default Modal;