import AdvertListItem from 'components/AdvertListItem/AdvertListItem';
import React, { useEffect, useState } from 'react';
import { Container, EmptyFavorites, EmptyFavoritesMessage, FilteredContainer } from './Favorites.styled';
import { useSelector } from 'react-redux';
import Footer from 'components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import FilteredForm from 'components/FilteredForm/FilteredForm';
import AdvertList from 'components/AdvertList/AdvertList';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = favorites.filter((advert) => {
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

      return;
    }
  }, [filters, favorites, isFiltering]);

  const makes = [...new Set(favorites.map((advert) => advert.make))];
  const prices = [...new Set(favorites.map((advert) => advert.rentalPrice.replace('$', '')))];
  const mileage = [...new Set(favorites.map((advert) => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  const handleResetClick = () => {
    setFilters({
      make: '',
      filteredPrices: [],
      minMileage: '',
      maxMileage: '',
    });
    setIsFiltering(false);
  };

  return (
    <>
      <Container>
        <FilteredContainer>
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
            onResetClick={handleResetClick}
          />
        </FilteredContainer>
        {favorites.length === 0 ? (
          <EmptyFavorites>
            <EmptyFavoritesMessage>Your favorites list is empty.</EmptyFavoritesMessage>
          </EmptyFavorites>
        ) : (
          <>
            {isFiltering ? (
              filteredAdverts !== null && filteredAdverts.length > 0 ? (
                <AdvertList filteredAdverts={filteredAdverts} /> 
              ) : (
                <EmptyFavorites>
                  <EmptyFavoritesMessage>No matching favorites found.</EmptyFavoritesMessage>
                </EmptyFavorites>
              )
            ) : (
              favorites.map((advert, index) => (
                <div key={advert.id}>
                  <AdvertListItem advert={advert} index={index} />
                </div>
              ))
            )}
          </>
        )}
      </Container>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Favorites;
