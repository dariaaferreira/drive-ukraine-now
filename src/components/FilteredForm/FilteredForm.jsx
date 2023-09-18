import React, { useState } from 'react';
import { Container } from './FilteredForm.styled';

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

  console.log("priceRanges: ", priceRanges);
  console.log("prices: ", prices);

  return (
    <Container>
      <select
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
      >
        <option value="">Enter the text</option>
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>

      <select
        value={selectedPrice}
        onChange={(e) => {
          setSelectedPrice(e.target.value);
          const selectedPriceRange = priceRanges.find((range) => range <= e.target.value);
          setSelectedPriceRange(selectedPriceRange);
        }}
      >
        <option value="">To $</option>
        {prices.map((price) => (
          <option key={price} value={price}>
            {price}
          </option>
        ))}
      </select>


      <div>
        <input
          type="number"
          placeholder="From"
          min={minMileageRounded}
          max={maxMileageRounded}
          step={100}
          value={minValue}
          onChange={handleMinInputChange}
        />
        <input
          type="number"
          placeholder="To"
          min={minMileageRounded}
          max={maxMileageRounded}
          step={100}
          value={maxValue}
          onChange={handleMaxInputChange}
        />
      </div>

      <button onClick={handleFilterClick}>Search</button>
    </Container>
  );
};

export default FilteredForm;
