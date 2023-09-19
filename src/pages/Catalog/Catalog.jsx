import React, { useEffect, useState } from 'react';
import { Button, CatalogContainer, ResultMessage } from './Catalog.styled';
import FilteredForm from 'components/FilteredForm/FilteredForm';
import AdvertList from '../../components/AdvertList/AdvertList';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from 'redux/adverts/selectors';
import { fetchAdverts } from 'redux/adverts/operations';
import Footer from 'components/Footer/Footer';

const Catalog = () => {
  const dispatch = useDispatch();
  const allAdverts = useSelector(getAdverts);

  const [filters, setFilters] = useState({
    make: '',
    price: '', 
    priceRange: '',
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false); 

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.price ||
        filters.minMileage ||
        filters.maxMileage ||
        filters.priceRange
      ) {
        const filteredAdverts = allAdverts.filter((advert) => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.price &&
            parseFloat(advert.rentalPrice.replace('$', '')) !== parseFloat(filters.price.value)
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts([]); 
      }
    }
  }, [filters, allAdverts, isFiltering]);

  const resetForm = () => {
    setFilters({
      make: '',
      price: '', 
      priceRange: '',
      minMileage: '',
      maxMileage: '',
    });
    setIsFiltering(false); 
  };

  const makes = [...new Set(allAdverts.map((advert) => advert.make))];

  const mileage = [...new Set(allAdverts.map((advert) => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  const prices = [...new Set(allAdverts.map((advert) => advert.rentalPrice.replace('$', '')))];

  const priceRanges = [];

  for (let price = 10; price <= 500; price += 10) {
    priceRanges.push(price);
  }

  return (
    <>
      <CatalogContainer>
      <FilteredForm
        makes={makes}
        prices={prices}
        priceRanges={priceRanges}
        minMileage={minMileage}
        maxMileage={maxMileage}
        onFilterChange={(newFilters) => {
          setFilters(newFilters);
          setIsFiltering(true); 
        }}
        filters={filters} 
      />
      {isFiltering ? (
        filteredAdverts !== null && filteredAdverts.length > 0 ? (
          <AdvertList filteredAdverts={filteredAdverts} />
        ) : (
          <>
            <ResultMessage>No results found for the selected criteria.</ResultMessage>
            <Button onClick={resetForm}>Reset form</Button> 
          </>
        )
      ) : (
        <AdvertList adverts={allAdverts} />
      )}
    </CatalogContainer>
    <Footer/>
    </>
  );
};

export default Catalog;
