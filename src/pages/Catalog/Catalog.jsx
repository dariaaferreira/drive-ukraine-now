import AdvertList from '../../components/AdvertList/AdvertList';
import React from 'react';
import { CatalogContainer } from './Catalog.styled';

const Catalog = () => {

  return (
    <CatalogContainer>
      <AdvertList/>
    </CatalogContainer>
  );
};

export default Catalog;