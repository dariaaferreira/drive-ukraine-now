import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Img,
  SliderWrapper,
  Span,
  Title,
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
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: true,
  };

  return (
    <div style={{ width: '1120px' }}>
      <Slider {...sliderSettings}>
      {adverts.map(advert => (
      <SliderWrapper key={advert.id}>
        <Img src={advert.img} alt={`Slide ${advert.make}`} />
        <Title>
          {advert.make} <Span> {advert.model}</Span>, {advert.year}
        </Title>
      </SliderWrapper>
        ))}
    </Slider>
    </div>
  );
};

export default CarSlider;
