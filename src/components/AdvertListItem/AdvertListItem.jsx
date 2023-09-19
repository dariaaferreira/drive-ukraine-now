import React, { useEffect, useState } from 'react';
import { HeartIcon, 
  Button, 
  Descr, 
  DescrContainer, 
  Img, 
  Item, 
  Span, 
  Title, 
  SpanPrice, 
  ImageContainer 
} from './AdvertListItem.styled';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/favorites/slice';


const AdvertListItem = ({ advert, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const shouldDisplaySpan = advert.make.length <= 9 && index < 3;

  const addressWords = advert.address.split(' ');
  const lastTwoWords = addressWords.slice(-2).join(' ').replace(',', ' | ');

  const firstFunctionality = advert.functionalities[0];

  const dispatch = useDispatch();
  
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === advert.id);
    setIsFavorite(isAlreadyFavorite);
  }, [favorites, advert]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Item>
      <ImageContainer>
        <Img src={advert.img} alt={advert.make} />
        <HeartIcon
          onClick={toggleFavorite}
          isFavorite={isFavorite}

        />
      </ImageContainer>
      
      <Title>
        {advert.make}{shouldDisplaySpan && <Span> {advert.model}</Span>}, {advert.year} <SpanPrice>{advert.rentalPrice}</SpanPrice>
      </Title>

      <DescrContainer>
        <Descr>
        {lastTwoWords} | {advert.rentalCompany} | {advert.type} | {advert.make} | {advert.mileage} | {firstFunctionality}
        </Descr>
      </DescrContainer>

      <Button onClick={() => openModal(advert.id)}>Learn More</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} id={advert.id} advert={advert}></Modal>
    </Item>
  );
};

export default AdvertListItem;
