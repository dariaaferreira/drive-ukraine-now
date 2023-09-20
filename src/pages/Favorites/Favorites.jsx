import AdvertListItem from 'components/AdvertListItem/AdvertListItem';
import React from 'react';
import { Container, EmptyFavorites, EmptyFavoritesMessage } from './Favorites.styled';
import { useSelector } from 'react-redux';
import Footer from 'components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <>
      <Container>
        {favorites.length === 0 ? (
          <EmptyFavorites>
            <EmptyFavoritesMessage>Your favorites list is empty.</EmptyFavoritesMessage>
          </EmptyFavorites>
        ) : (
          favorites.map((advert, index) => (
            <div key={advert.id}>
              <AdvertListItem advert={advert} index={index} />
            </div>
          ))
        )}
      </Container>
      <ToastContainer/>
      <Footer />
    </>
  );
};

export default Favorites;
