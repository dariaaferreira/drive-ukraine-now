import React, { useState } from 'react';
import Select from 'react-select'; 
import {
  Button, 
  Container, 
  Form, 
  InputContainer, 
  InputLeft, 
  InputRight, 
  Label,
  SelectContainer,
  UnitLeft,
  UnitRight, 
} from './FilteredForm.styled';

const FilteredForm = ({
  makes,
  priceRanges,
  prices,
  onFilterChange,
}) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const formatMileage = (value) => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // console.log('items: ', formattedValue);
    return formattedValue;
  };  

  const handleMinInputChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleFilterClick = () => {
    if (parseInt(minValue.replace(/,/g, ''), 10) > parseInt(maxValue.replace(/,/g, ''), 10)) {
      alert('Minimum mileage cannot be greater than maximum mileage');
      return; 
    }
  
    const newFilters = {
      make: selectedMake,
      price: selectedPrice,
      priceRange: selectedPriceRange,
      minMileage: parseInt(minValue.replace(/,/g, ''), 10),
      maxMileage: parseInt(maxValue.replace(/,/g, ''), 10),
    };
  
    onFilterChange(newFilters);
  };
  

  const makeOptions = makes.map((make) => ({ value: make, label: make }));
  const priceOptions = prices.map((price) => ({ value: price, label: price }));
  
  return (
    <Container>
      <SelectContainer>
        <Label htmlFor="nameSelect">Car brand</Label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake} 
          onChange={(selectedOption) => setSelectedMake(selectedOption)} 
          options={makeOptions}
          styles={{ 
            control: (styles) => ({
              ...styles,
              width: '224px', 
              height: '48px',
              borderColor: 'rgba(18, 20, 23, 0.2)', 
              border: 'none',
              borderRadius: '14px',
              padding: '8px',
              fontSize: '16px',
              fontFamily: 'ManropeMedium',
              backgroundColor: 'rgba(247, 247, 251, 1)',
              appearance: 'none',
            }),
            option: (styles) => {
              return {
              ...styles,
              color: 'rgba(18, 20, 23, 0.2)',
              fontFamily: 'ManropeMedium',
            };
            },
            menuList: (base) => ({
              ...base,
              "::-webkit-scrollbar": {
                width: "9px"
              },
              "::-webkit-scrollbar-track": {
                background: "rgba(18, 20, 23, 0.05)"
              },
              "::-webkit-scrollbar-thumb": {
                background: "rgba(18, 20, 23, 0.05)"
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "rgba(18, 20, 23, 0.05)"
              }
            }),
            placeholder: (styles) => ({
              ...styles,
              color: 'rgba(18, 20, 23, 1)',
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      <SelectContainer>
        <Label htmlFor="priceSelect">Price/ 1 hour</Label>
        <Select
          id="priceSelect"
          placeholder="To $"
          value={selectedPrice} 
          onChange={(selectedOption) => {
            setSelectedPrice(selectedOption); 
            const selectedPriceRange = priceRanges.find((range) => range <= selectedOption);
            setSelectedPriceRange(selectedPriceRange);
          }}
          options={priceOptions}
          styles={{ 
            control: (styles) => ({
              ...styles,
              width: '125', 
              height: '48px',
              borderColor: 'rgba(18, 20, 23, 0.2)', 
              border: 'none',
              borderRadius: '14px',
              padding: '8px',
              fontSize: '16px',
              fontFamily: 'ManropeMedium',
              backgroundColor: 'rgba(247, 247, 251, 1)',
              appearance: 'none',
            }),
            option: (styles) => {
              return {
              ...styles,
              color: 'rgba(18, 20, 23, 0.2)',
              fontFamily: 'ManropeMedium',
            };
            },
            menuList: (base) => ({
              ...base,
              "::-webkit-scrollbar": {
                width: "9px"
              },
              "::-webkit-scrollbar-track": {
                background: "rgba(18, 20, 23, 0.05)"
              },
              "::-webkit-scrollbar-thumb": {
                background: "rgba(18, 20, 23, 0.05)"
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "rgba(18, 20, 23, 0.05)"
              }
            }),
            placeholder: (styles) => ({
              ...styles,
              color: 'rgba(18, 20, 23, 1)',
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      <Form>
        <Label>Car mileage / km</Label> 
        <InputContainer>
          <InputLeft
            type="text"
            // placeholder="From"
            value={formatMileage(minValue)}
            onChange={handleMinInputChange}
            autofocus="autofocus"
          />
          <UnitLeft>From</UnitLeft>
          <InputRight
            type="text"
            // placeholder="To"
            value={formatMileage(maxValue)}
            onChange={handleMaxInputChange}
            autofocus="autofocus"
          />
          <UnitRight>To</UnitRight>
        </InputContainer>
      </Form>

      <Button onClick={handleFilterClick}>Search</Button>
    </Container>
  );
};

export default FilteredForm;
