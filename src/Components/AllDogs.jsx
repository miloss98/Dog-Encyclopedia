import { useState } from "react";
import axios from "axios";
import "./component_styles/allDogs.css";
//"https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&limit=20"

const AllDogs = () => {
  const [data, setData] = useState([]);
  const url = "https://api.thedogapi.com/v1/breeds/";

  const fetchData = async () => {
    try {
      const response = await axios(url, {
        headers: {
          ["x-api-key"]: "baedd49c-04e6-4dd4-a0bb-4abcb9f50744",
        },
      });
      const data = response.data;
      setData(data);
    } catch (error) {}
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <div className="all-dogs-container">
      <header className="heading-div">
        <h4> Welcome to Dog Encyclopedia! </h4>
      </header>
      <div className="container">
        {data.map((dog) => {
          const {
            id,
            name,
            weight,
            height,
            bred_for,
            breed_group,
            life_span,
            temperament,
            origin,
            image,
          } = dog;
          return (
            <article key={id} className="single-dog">
              <div id="img-div">
                <img src={image.url} alt={`${name} image`} />
              </div>
              <div className="top">
                <h3 className="dog-name">{name} </h3>
                <button type="click" className="show-all">
                  Show all
                </button>
              </div>
              <p>
                <span>Lifespan:</span> {life_span || "/"}
              </p>
              <p>
                <span>Temperament:</span> {temperament || "/"}{" "}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AllDogs;
