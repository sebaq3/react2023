import React, {useId, useState} from 'react';
import Card from '../series/Card';
import json from '../assets/series.json'

const Series = () => {
  const id = useId();

  const[series, setSeries] = useState(json.series);





  return (
    <div><h1>Series</h1>
    {series.map((serie)=>{
        return (
        <Card
        key={serie.id} 
        serie={serie}


        />
        );
      })}
    </div>
  );
}

export default Series