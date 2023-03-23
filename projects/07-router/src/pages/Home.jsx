import { Link } from '../Link';

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>¡Este es un ejemplo de un React Router hecho desde cero!</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  );
}
