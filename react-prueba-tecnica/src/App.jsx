import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);

        const first3Words = fact.split(' ', 3).join(' ');
        
        fetch(`https://cataas.com/cat/says/${first3Words}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(data => {
            const { url } = data;
            setImageUrl(url);
          });
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={CAT_PREFIX_IMAGE_URL + imageUrl} alt={`Image extracted using the first three words of the fact: ${fact}`} />}
    </main>
  )
}