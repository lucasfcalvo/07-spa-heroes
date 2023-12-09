import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../hooks/UseForm";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log({location})
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search Hero</h1>
      <hr />
      <div className="row ">
        <div className=" col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}
          className="form-control">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-outline-info mt-2">search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {q === "" ? (
            <div className="alert alert-info">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                There's no results hero: <b>{q}</b>
              </div>
            )
          )} */}
          <div
            className="alert alert-info animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            There's no results hero: <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {/* < HeroCard/> */}
        </div>
      </div>
    </>
  );
};
