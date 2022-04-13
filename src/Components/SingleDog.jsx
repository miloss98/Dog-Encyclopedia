import "./component_styles/singleDog.css";
import Home from "./../Pages/Home";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import goBack from "./../images/go-back.svg";
import { RingLoader } from "react-spinners";
import { useGlobalContext } from "../context";

const SingleDog = () => {
  const { url, loading, setLoading, dogData, setDogData, imageUrl } =
    useGlobalContext();

  const { dogId } = useParams();
  const getDog = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${dogId}`);
      const dogData = await response.json();
      setDogData(dogData);
      setLoading(false);
    } catch (error) {}
  };
  //single dog fetch
  useEffect(() => {
    getDog();
  }, [dogId]);

  if (loading) {
    return (
      <div className="spinner-container">
        <RingLoader color={"#3282B8"} loading={loading} size={150} />
      </div>
    );
  }
  return (
    <section className="single-dog-container">
      <nav>
        <h1> {dogData.name} </h1>
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
            src={`${imageUrl}${dogData.reference_image_id}.jpg`}
            alt={dogData.name}
          />
        </div>
        <section className="details">
          <p id="life-span">
            <span id="keyword">Life span:</span> {dogData.life_span}
          </p>
          <p id="temperament">
            <span id="keyword">Temperament:</span> {dogData.temperament}
          </p>
          <p id="breed">
            <span id="keyword">Bred for:</span> {dogData.bred_for || "/"}
          </p>
          <p id="breed">
            <span id="keyword">Breed group:</span> {dogData.breed_group || "/"}
          </p>
          <p>
            <span id="keyword">Origin country:</span> {dogData.origin || "/"}
          </p>
          <p>
            <span id="keyword">
              Height: <br></br>
            </span>{" "}
            imperial: {dogData.height?.imperial || "/"} <br></br>
            metric: {dogData.height?.metric}
          </p>
          <p>
            <span id="keyword">
              Weight: <br></br>
            </span>{" "}
            imperial: {dogData.weight?.imperial || "/"} <br></br>
            metric: {dogData.weight?.metric}
          </p>
        </section>
      </article>
    </section>
  );
};

export default SingleDog;
