import React, { useEffect, useState } from 'react';
import { Button, CatalogContainer, ResultMessage } from './Catalog.styled';
import FilteredForm from 'components/FilteredForm/FilteredForm';
import AdvertList from '../../components/AdvertList/AdvertList';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from 'redux/adverts/selectors';
import { fetchAdverts } from 'redux/adverts/operations';
import Footer from 'components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Catalog = () => {
  const dispatch = useDispatch();
  const allAdverts = useSelector(getAdverts);

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
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
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = allAdverts.filter((advert) => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some((priceObj) => priceObj.value === advert.rentalPrice.replace('$', ''))
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
      filteredPrices: [],
      minMileage: '',
      maxMileage: '',
    });
    setIsFiltering(false); 
  };

  const makes = [...new Set(allAdverts.map((advert) => advert.make))];
  const prices = [...new Set(allAdverts.map((advert) => advert.rentalPrice.replace('$', '')))];
  const mileage = [...new Set(allAdverts.map((advert) => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);  

  return (
    <>
      <CatalogContainer>
      <FilteredForm
        makes={makes}
        prices={prices}
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
            <Button onClick={resetForm}>Reset list</Button> 
          </>
        )
      ) : (
        <AdvertList adverts={allAdverts} />
      )}
    </CatalogContainer>
    <ToastContainer/>
    <Footer/>
    </>
  );
};

export default Catalog;
