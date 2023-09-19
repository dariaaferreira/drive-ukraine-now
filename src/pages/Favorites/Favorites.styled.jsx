import { ReactComponent as Icon } from '../../images/icon.svg';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 65vh;
  grid-gap: 29px;
  padding-bottom: 20px;
  max-width: 1184px;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const HeartIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: 24px;
  display: flex; 
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
  margin-left: 6px;
`;

export const SpanPrice = styled.span`
  margin-left: auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 10px;
  object-fit: cover;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%);
`;

export const DescrContainer = styled.div`
  display: flex;
`;

export const Descr = styled.h4`
  display: flex;
  font-size: 12px;
  line-height: 1.5em;
  font-family: ManropeThin;
  color: rgba(18, 20, 23, 0.5);
`;

export const Button = styled.button`
  width: 274px;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #3470FF;
  color: white;
  cursor: pointer;
  border: none;

  &:hover, &:focus {
  background-color: #2196F3;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;