import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Img = styled.img`
  width: 335px;
  height: 268px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%);
  transition: transform 0.3s ease-in-out;
  object-fit: cover;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;

export const CarouselSlider = styled(Slider)`
  width: 1140px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 335px;
  max-width: 335px;

  padding: 24px 20px;
  margin-bottom: 8px;
`;
