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
} from './FilteredForm.styled';

const FilteredForm = ({
  makes,
  priceRanges,
  prices,
  minMileage,
  maxMileage,
  onFilterChange,
}) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const minMileageRounded = Math.floor(minMileage / 100) * 100;
  const maxMileageRounded = Math.ceil(maxMileage / 100) * 100;

  const handleMinInputChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleFilterClick = () => {
    const newFilters = {
      make: selectedMake,
      price: selectedPrice,
      priceRange: selectedPriceRange,
      minMileage: parseInt(minValue, 10),
      maxMileage: parseInt(maxValue, 10),
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
            type="number"
            placeholder="From"
            min={minMileageRounded}
            max={maxMileageRounded - 100}
            step={100}
            value={minValue}
            onChange={handleMinInputChange}
          />
          <InputRight
            type="number"
            placeholder="To"
            min={minMileageRounded + 100}
            max={maxMileageRounded}
            step={100}
            value={maxValue}
            onChange={handleMaxInputChange}
          />
        </InputContainer>
      </Form>

      <Button onClick={handleFilterClick}>Search</Button>
    </Container>
  );
};

export default FilteredForm;
