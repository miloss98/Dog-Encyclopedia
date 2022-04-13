import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //api link
  const url = "https://api.thedogapi.com/v1/breeds/";

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  //Search values
  const searchValue = useRef("");
  const searchDogs = () => {
    setSearch(searchValue.current.value);
  };

  //Data fetching
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
  // useEff for initial render fetch
  useEffect(() => {
    fetchData();
  }, []);

  // useEff for search/query
  useEffect(() => {
    setFilteredData(
      data.filter((dog) =>
        dog.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);
  return (
    <AppContext.Provider
      value={{
        url,
        loading,
        setLoading,
        data,
        setData,
        filteredData,
        setFilteredData,
        search,
        setSearch,
        searchValue,
        searchDogs,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
