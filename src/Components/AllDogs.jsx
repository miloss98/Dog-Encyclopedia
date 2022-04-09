import { useState } from "react";
import axios from "axios";

const AllDogs = () => {
  const [data, setData] = useState([]);
  const url =
    "https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&limit=5";

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

  return (
    <div>
      AllDogs
      <button onClick={fetchData}> fetch </button>
      {data.map((dog) => {
        const { breeds, id, url } = dog;
        return (
          <section key={id}>
            <img src={url} alt="img" />
            {breeds.map((breedInfo) => {
              const {
                id,
                weight,
                height,
                name,
                bred_for,
                breed_group,
                life_span,
                temperament,
              } = breedInfo;
              return (
                <article key={id}>
                  <h1>{name}</h1>
                  <p>
                    Weight: <br></br> Imperial: {weight.imperial} <br></br>
                    Metric: {weight.metric}
                  </p>
                  <p>
                    Height: <br></br> Imperial: {height.imperial} <br></br>
                    Metric: {height.metric}
                  </p>
                  <p>
                    {" "}
                    Bred for: {bred_for} <br></br>Breed groud: {breed_group}
                  </p>
                  <span> Lifespan: {life_span}</span>
                  <p>Temperament: {temperament} </p>
                </article>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default AllDogs;
