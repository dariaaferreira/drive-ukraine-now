import React, { useState } from 'react';
import { Button, Div, DivContainer, Img, Item, Span, Title, SpanPrice } from './AdvertListItem.styled';
import Modal from '../Modal/Modal';

const AdvertListItem = ({ advert, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const shouldDisplaySpan = index < 3; 

  const addressWords = advert.address.split(' ');
  const lastTwoWords = addressWords.slice(-2).join(' ').replace(',', ' | ');

  const firstFunctionality = advert.functionalities[0];

  return (
    <Item>
      <Img src={advert.img} alt={advert.make} />
      <Title>
        {advert.make}{shouldDisplaySpan && <Span> {advert.model}</Span>}, {advert.year} <SpanPrice>{advert.rentalPrice}</SpanPrice>
      </Title>

      <DivContainer>
        <Div>
        {lastTwoWords} | {advert.rentalCompany} | {advert.type} | {advert.make} | {advert.mileage} | {firstFunctionality}
        </Div>
      </DivContainer>

      <Button onClick={openModal}>Learn More</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>

    </Item>
  );
};

export default AdvertListItem;
