import React, { useEffect } from 'react';
import {
  Img,
  SliderWrapper,
  CarouselSlider,
} from './CarSlider.styled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/operations';
import { getAdverts } from 'redux/adverts/selectors';

const CarSlider = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const sliderSettings = {
    slidesToShow: 3,
    adaptiveHeight: true,
    variableWidth: true,
  };

  return (
    <CarouselSlider {...sliderSettings}>
      {adverts.slice(21, 24).map(advert => (
      <SliderWrapper key={advert.id}>
        <Img src={advert.img} alt={`Slide ${advert.make}`} />
      </SliderWrapper>
        ))}
    </CarouselSlider>
  );
};

export default CarSlider;
