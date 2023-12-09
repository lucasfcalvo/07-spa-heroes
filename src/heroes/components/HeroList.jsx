import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPlublisher";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
 getHeroesByPublisher(publisher);
  return (
    <div className='row rowa-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( hero => (
               <HeroCard key={hero.id} {...hero} />
            ))
        }
      
    </div>
  );
};
