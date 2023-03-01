import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import './Footer.css'

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();

  const cartFormatted = cart.map(({title, quantity}) => ({ title, quantity }));

  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)} <br/>
      {JSON.stringify(cartFormatted, null, 2)}
    </footer>
  );
}