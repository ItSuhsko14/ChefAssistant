import React, {useState, useEffect} from 'react'


function GaetAll() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const baseUrl = 'http://localhost:5000/cards/';
  
  useEffect( () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setItems(result);
        },

        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoading) {
    return <div>Loading...</div>
  } else {
      console.log(items[0]);
      return (
        <ul>
          {items.map( item => (
              <li key={item._id}>
                {item.title} - {item.text};
              </li>
          ))}і
        </ul>  
          
      )
  }
}

export default GaetAll;