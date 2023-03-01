import { useContext, useState } from 'react';
import { FiltersContext } from '../context/filters';


export function useFilters() {

  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = products => {
    return products.filter(({price, minPrice, category}) => {
      return (
        price >= filters.minPrice &&
        (filters.category === 'all' ||
        filters.category === category)
      );
    });
  }

  return { filters, setFilters, filterProducts }
}