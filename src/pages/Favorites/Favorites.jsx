import AdvertListItem from 'components/AdvertListItem/AdvertListItem';
import React from 'react';
import { Container } from './Favorites.styled';
import { useSelector } from 'react-redux';
// import Footer from 'components/Footer/Footer';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <>
      <Container>
        {favorites.map((advert, index) => (
          <div key={advert.id}>
            <AdvertListItem advert={advert} index={index} />
          </div>
        ))}
      </Container>
      {/* <Footer /> */}
    </>
  );
};


export default Favorites;
