import React , { useState } from "react";
import json from "../assets/peliculas.json";
import Card from "./Card";
import GeneralLayout from "../layouts/GeneralLayout";

export const Pelis = () => {
  
  //QUIERO QUE POR CADA PELICULA GENERE UNA TARJETA
  const [peliculas, setPelicula] = useState(json.peliculas);
  
  
  return (
    <div>
      <GeneralLayout></GeneralLayout>
      <h1>Peliculas</h1>
      {peliculas.map((peli) => {
        return <Card key={peli.id} pelicula={peli} />;
        })}
    </div>
  )
}
