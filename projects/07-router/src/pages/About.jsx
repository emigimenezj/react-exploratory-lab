import { Link } from '../Link';

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <p>¡Hola! Soy EmiGimenezJ y estoy creando un clon de React Router.</p>
        <img src="https://pbs.twimg.com/profile_images/988605530661883904/mIL3SogB_400x400.jpg" alt="Foto de perfil de EmiGimenezJ" />
      </div>
      <Link to='/'>Ir al home</Link>
    </>
  );
}
