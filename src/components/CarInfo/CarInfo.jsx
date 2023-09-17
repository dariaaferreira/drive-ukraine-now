import React from 'react';
import { SpanUnit, 
    ConditionContainer, 
    ConditionUnit, 
    ConditionDescr, 
    DescrTitle, 
    AdvDescr, 
    ImgContainer, 
    Descr, 
    DescrContainer, 
    InfoContainer, 
    Img, 
    Span, 
    Title, 
    Button, 
    ButtonLink
} from './CarInfo.styled';

const CarInfo = ({ advert }) => {
  const addressWords = advert.address.split(' ');
  const lastTwoWords = addressWords.slice(-2).join(' ').replace(',', ' | ');

  const formatConditionAndNumber = (text) => {
    const numberWithComma = (number) => {
      return number.toLocaleString(); 
    };
  
    if (typeof text === 'string') { 
      const match = text.match(/(\d+)/);
      if (match) {
        const number = match[0];
        const restOfText = text.replace(number, '');
  
        return (
          <>
            {restOfText} <SpanUnit>{numberWithComma(number)}</SpanUnit>
          </>
        );
      }
    }
    return text;
  };

  return (
    <>
      <ImgContainer>
        <Img src={advert.img} alt={advert.make} />
      </ImgContainer>

      <InfoContainer>
        <Title>
          {advert.make} <Span> {advert.model}</Span>, {advert.year}
        </Title>

        <DescrContainer>
          <Descr>
            {lastTwoWords} | Id: {advert.id} | Year: {advert.year} | Type: {advert.type}  Fuel Consumption: {advert.fuelConsumption} | Engine Size: {advert.engineSize} 
          </Descr>
        </DescrContainer>

        <AdvDescr>{advert.description}</AdvDescr>

        <DescrContainer>
          <DescrTitle>Accessories and functionalities:</DescrTitle>
          <Descr>
            {advert.accessories.join(" | ")} | {advert.functionalities.join(" | ")}
          </Descr>
        </DescrContainer>
        
        <ConditionContainer>
          <DescrTitle>Rental Conditions:</DescrTitle>
          <ConditionDescr>
            {advert.rentalConditions.split('\n').map((condition, index) => (
              <ConditionUnit key={index}>{formatConditionAndNumber(condition)}</ConditionUnit>
            ))} 
            <ConditionUnit>
                Mileage: <SpanUnit>
                    {typeof advert.mileage === 'number' ? advert.mileage.toLocaleString('en-US') : advert.mileage}
                </SpanUnit>
            </ConditionUnit>

            <ConditionUnit>
             Price: <SpanUnit>{advert.rentalPrice.replace('$', '') + '$'}</SpanUnit>
            </ConditionUnit>
          </ConditionDescr>
        </ConditionContainer>        

        <Button>
          <ButtonLink href="tel:+380730000000">Rental Car</ButtonLink>
        </Button>
      </InfoContainer>
    </>
  );
};

export default CarInfo;
