import { useEffect, useState } from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function useCatImage({ fact }) {

  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const first3Words = fact.split(' ', 3).join(' ');
        
    fetch(`https://cataas.com/cat/says/${first3Words}?size=50&color=red&json=true`)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching cat image')
        return res.json();
      }).then(data => {
        const { url } = data;
        setImageUrl(url);
      }).catch(error => {
        console.log(error);
      });
  }, [fact]);

  return { imageUrl: CAT_PREFIX_IMAGE_URL + imageUrl };
}