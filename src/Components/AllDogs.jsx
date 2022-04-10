import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./component_styles/allDogs.css";
import { RingLoader } from "react-spinners";

const AllDogs = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const url = "https://api.thedogapi.com/v1/breeds/";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(url, {
        headers: {
          ["x-api-key"]: "baedd49c-04e6-4dd4-a0bb-4abcb9f50744",
        },
      });
      const data = response.data;
      setData(data);
      setLoading(false);
    } catch (error) {}
  };

  useState(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <RingLoader color={"#3282B8"} loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="all-dogs-container">
      <header className="heading-div">
        <h4> Welcome to Dog Encyclopedia! </h4>
      </header>
      <div className="container">
        {data.map((dog) => {
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
