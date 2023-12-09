import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";
export const HeroPage = () => {
  const { id } = useParams();
  // console.log(id)
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };
  // console.log(hero)
  if (!hero) {
    return <Navigate to="/search" />;
  }
  return (
    // <>
    // <h1>{hero.superhero}</h1>
    // </>
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-5">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail "
        />
      </div>
      <div className="col-7">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h4 className="mt-3">Characters</h4>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={onNavigateBack}>
          Atras
        </button>
      </div>
    </div>
  );
};
