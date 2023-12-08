import { Link } from "react-router-dom";


const CharacterByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImagenUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5">
            <img src={heroImagenUrl} alt={superhero} className="card-img m-1" />
          </div>
          <div className="col-7">
            <div className="card-body">
              <h6 className="card-title">{superhero}</h6>
              <p className="card-text">{alter_ego}</p>

              {/* 
                    {(alter_ego!== characters)&&( <p>{characters}</p>)}
                      */}
              <CharacterByHero alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};