import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';
import './App.css'

export function App() {
  const { fact, refreshFact } = useCatFact(); // TODO: there is a bug, some facts has '/' character and IMAGE API return an error fetch
  const { imageUrl } = useCatImage({ fact });

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={refreshFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words of the fact: ${fact}`} />}
    </main>
  );
}