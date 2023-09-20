import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, ModalClose } from './Modal.styled'; 
import CarInfo from 'components/CarInfo/CarInfo';

const Modal = ({ isOpen, onClose, children, id, advert }) => {
  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || id !== advert.id) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalClose onClick={onClose}>✕</ModalClose>
        <CarInfo advert={advert}/>
        {children}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default Modal;
