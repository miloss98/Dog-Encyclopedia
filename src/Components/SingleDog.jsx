import "./component_styles/singleDog.css";
import Loading from "./Loading";
import Home from "./../Pages/Home";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import goBack from "./../images/go-back.svg";

const SingleDog = () => {
  const url = "https://api.thedogapi.com/v1/breeds/";
  const imageUrl = "https://cdn2.thedogapi.com/images/";
  const { dogId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDog = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${dogId}`);
      const dogData = await response.json();
      setData(dogData);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getDog();
  }, [dogId]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="single-dog-container">
      <nav>
        <h1> {data.name} </h1>
        <Link to="/" element={<Home />}>
          {" "}
          <button className="back-to-list">
            {" "}
            <img id="arrow-go-back" src={goBack} alt="Go back?" />
          </button>
        </Link>
      </nav>
      <article className="dog-info-container">
        <div className="dog-img-div">
          <img
            src={`${imageUrl}${data.reference_image_id}.jpg`}
            alt={data.name}
          />
        </div>
        <section className="details">
          <p id="life-span">
            <span id="keyword">Life span:</span> {data.life_span}
          </p>
          <p id="temperament">
            <span id="keyword">Temperament:</span> {data.temperament}
          </p>
          <p id="breed">
            <span id="keyword">Bred for:</span> {data.bred_for || "/"}
          </p>
          <p id="breed">
            <span id="keyword">Breed group:</span> {data.breed_group || "/"}
          </p>
          <p>
            <span id="keyword">Origin country:</span> {data.origin || "/"}
          </p>
          <p>
            <span id="keyword">
              Height: <br></br>
            </span>{" "}
            imperial: {data.height?.imperial || "/"} <br></br>
            metric: {data.height?.metric}
          </p>
          <p>
            <span id="keyword">
              Weight: <br></br>
            </span>{" "}
            imperial: {data.weight?.imperial || "/"} <br></br>
            metric: {data.weight?.metric}
          </p>
        </section>
      </article>
    </section>
  );
};

export default SingleDog;
