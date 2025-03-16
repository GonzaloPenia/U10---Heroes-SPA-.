import { Navigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers/getHeroById";

export const HeroPage = () => {   
  
  const { id } = useParams();
  const hero = getHeroesById(id);

  if (!hero){return <Navigate to="/marvel"/>}
  
  console.log(hero);
  
  return (
    <h1>Hero Page</h1>
  )
}
