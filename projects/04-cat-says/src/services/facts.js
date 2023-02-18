const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function getRandomFact() {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching fact');
      return res.json();
    })
    .then(data => data.fact)
    .catch(error => console.log(error));
}