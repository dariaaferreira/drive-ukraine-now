import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';
import { getAdverts } from '../../redux/adverts/selectors';
import { Container, ListItems, LoadMoreButton } from './AdvertList.styled';
import AdvertListItem from '../AdvertListItem/AdvertListItem';
import Loader from '../Loader/Loader';

const AdvertList = ({ filteredAdverts }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const [displayedAdverts, setDisplayedAdverts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    if (adverts && adverts.length > 0) {
      if (filteredAdverts && filteredAdverts.length > 0) {
        setDisplayedAdverts(filteredAdverts.slice(0, startIndex + itemsPerPage));
      } else {
        setDisplayedAdverts(adverts.slice(0, startIndex + itemsPerPage));
      }
    }
  }, [adverts, startIndex, filteredAdverts]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setStartIndex(startIndex + itemsPerPage);
      setLoading(false);
    }, 1000);
  };

  if (!adverts || adverts.length === 0) {
    return <Loader />;
  }

  const hasFilteredAdverts = filteredAdverts && filteredAdverts.length > 0;
  const filteredAdvertsCount = hasFilteredAdverts ? filteredAdverts.length : adverts.length;
  const shouldShowLoadMoreButton = !loading && startIndex + itemsPerPage < filteredAdvertsCount;

  return (
    <Container>
      <ListItems>
        {hasFilteredAdverts
          ? 
            filteredAdverts.slice(0, startIndex + itemsPerPage).map((advert, index) => (
              <AdvertListItem key={advert.id} advert={advert} index={index} />
            ))
          : 
            displayedAdverts.map((advert, index) => (
              <AdvertListItem key={advert.id} advert={advert} index={index} />
            ))}
      </ListItems>
      {loading ? (
        <Loader />
      ) : (
        shouldShowLoadMoreButton && (
          <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
        )
      )}
    </Container>
  );
};

export default AdvertList;
