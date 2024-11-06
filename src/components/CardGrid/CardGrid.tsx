import { useEffect, useState } from "react";
import Card from "../Card";

export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Location {
    name: string;
    url:  string;
}


export default function CardGrid() {

    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        const url ="https://rickandmortyapi.com/api/character/1,2,3,4,5,6";

        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    }
      fetchData();
    },[]);




  return (
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
        data.map((personaje) => (
        <Card name={personaje.name} species={personaje.species} gender={personaje.gender} image={personaje.image} status={personaje.status} />
        ))
    }
   </div>
  )
}