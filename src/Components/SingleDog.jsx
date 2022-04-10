import "./component_styles/singleDog.css";
import Loading from "./Loading";
import Home from "./../Pages/Home";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleDog = () => {
  const url = "https://api.thedogapi.com/v1/breeds/";
  const imageUrl = "https://cdn2.thedogapi.com/images/";
  const { dogId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDog = async () => {
    try {
      const response = await fetch(`${url}${dogId}`);
      const dogData = await response.json();
      setData(dogData);
    } catch (error) {}
  };

  useEffect(() => {
    getDog();
  }, [dogId]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section>
        <h1>Single dog page {data.dogId} </h1>

        <article>
          <img
            src={`${imageUrl}${data.reference_image_id}.jpg`}
            alt={data.name}
          />
          <h1> {data.name} </h1>
          <p> {data.life_span} </p>
          <p>{data.temperament} </p>
          <p> Bred for: {data.bred_for || "/"} </p>
          <p> Breed group: {data.breed_group || "/"} </p>
          <p> Origin country: {data.origin || "/"} </p>
          <p>
            <span>Height:</span> imperial: {data.height?.imperial || "/"}{" "}
            <br></br>
            metric: {data.height?.metric}
          </p>
          <p>
            <span>Weight:</span> imperial: {data.weight?.imperial || "/"}{" "}
            <br></br>
            metric: {data.weight?.metric}
          </p>
          <Link to="/" element={<Home />}>
            {" "}
            Back to list
          </Link>
        </article>
      </section>
    </>
  );
};

export default SingleDog;
