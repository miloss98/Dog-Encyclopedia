import { useState } from "react";
import axios from "axios";

const AllDogs = () => {
  const [data, setData] = useState([]);
  const url =
    "https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&limit=5&page=1";

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
          <article key={id}>
            <img src={url} alt="img" />
          </article>
        );
      })}
    </div>
  );
};

export default AllDogs;
