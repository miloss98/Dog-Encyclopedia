import { Link } from "react-router-dom";
import "./component_styles/allDogs.css";
import searchIcon from "./../images/search-icon.svg";
import { RingLoader } from "react-spinners";
import { useGlobalContext } from "../context";

const AllDogs = () => {
  const { loading, filteredData, searchValue, searchDogs } = useGlobalContext();

  if (loading) {
    return (
      <div className="spinner-container">
        <RingLoader color={"#3282B8"} loading={loading} size={150} />
      </div>
    );
  }
  if (filteredData == "" && filteredData.length < 1) {
    return (
      <div className="no-dogs-container">
        <div id="no-dogs">
          {" "}
          No dogs matched your criteria :(
          <br></br>
          <h4> Please, try again. </h4>
        </div>

        <section className="search-bar-container">
          <div className="search-div">
            <img id="search-icon" src={searchIcon} alt="search icon" />
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Husky"
              ref={searchValue}
            ></input>
            <button className="search-btn" type="click" onClick={searchDogs}>
              Search
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="all-dogs-container">
      <header className="heading-div">
        <h4> Search your favorite dog! </h4>
        <section className="search-bar-container">
          <div className="search-div">
            <img id="search-icon" src={searchIcon} alt="search icon" />
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Husky"
              ref={searchValue}
            ></input>
            <button className="search-btn" type="click" onClick={searchDogs}>
              Search
            </button>
          </div>
        </section>
      </header>
      <div className="container">
        {filteredData.map((dog) => {
          const { id, name, bred_for, life_span, image } = dog;
          return (
            <article key={id} className="single-dog">
              <div id="img-div">
                <img src={image.url} alt={`${name} image`} />
              </div>
              <div className="top">
                <h3 className="dog-name">{name} </h3>
                <Link className="show-all" to={`/dogs/${id}`}>
                  {" "}
                  Read more
                </Link>
              </div>
              <p>
                <span className="short-desc">Lifespan:</span> {life_span || "/"}
              </p>
              <p>
                <span className="short-desc">Bred for:</span> {bred_for || "/"}{" "}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AllDogs;
