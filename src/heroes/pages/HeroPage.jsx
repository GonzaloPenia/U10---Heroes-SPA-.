import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroesById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {   
  
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroesById(id), [id]);

  const onReturn = () => { 
    const publisher = hero.publisher;
    if(publisher==='Marvel Comics'){
      navigate(`/marvel`);
    }
    else{navigate(`/dc`)}
  }

  if (!hero){return <Navigate to="/marvel"/>}
  
  return (
    <div className="row">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img  src={`/heroes/${ id }.jpg`} 
              alt={hero.superhero} 
              className="img-thumbnail"/>
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        
        <div className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego}</div>
        <div className="list-group-item"> <b>Publisher:</b> {hero.publisher}</div>
        <div className="list-group-item"> <b>Frist appereance: {hero.first_appearance}</b> </div>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
