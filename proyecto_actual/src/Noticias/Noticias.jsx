import React, { useState, useEffect }  from 'react';
import GeneralLayout from "../layouts/GeneralLayout";
import Card  from "../Noticias/Card";






export const Noticias = () => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e978d37cf754ee2def0362a69807b215&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error)=> setError(error))
    .finally(() => setLoading(false));
    
  }, []);
    



  return (
    <div className='App'>
       <GeneralLayout></GeneralLayout>
        <h1>Noticias</h1>
        <div className="card-container">
          <ul>
            {error && <li>Error:{error}</li>}
            {loading && <li>Loading...</li>}
            {data.results?.map((item) => (
              <Card key={item.original_title} upcoming={item}/>
            /*<li key={user.id}>{user.name}</li>*/
            ))}
          </ul>
        </div>
    </div>
  )
  };
 

            






