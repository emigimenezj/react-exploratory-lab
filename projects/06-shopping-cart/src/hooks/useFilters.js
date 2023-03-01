import { useState } from 'react';


export function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = products => {
    return products.filter(({price, minPrice, category}) => {
      return (
        price >= filters.minPrice &&
        (filters.category === 'all' ||
        filters.category === category)
      );
    });
  }

  return { filterProducts, setFilters }
}