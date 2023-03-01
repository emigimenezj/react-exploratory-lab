import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import './Footer.css'

export function Footer() {
  const { filters } = useContext(FiltersContext);

  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
}