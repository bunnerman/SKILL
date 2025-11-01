async function fetchMultipleAPIs() 
{
  const urls = 
  [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  const promises = urls.map(url => fetch(url).then(res => res.json()));

  const results = await Promise.all(promises);

  console.log(results);
}

fetchMultipleAPIs();
