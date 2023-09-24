import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";
import { ALL_COUNTRIES } from "../constants";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => {
      setCountries(data);
      setFilteredCountries(data);
    });
  }, []);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((card) => {
          const countryInfo = {
            img: card.flags.png,
            name: card.name.common,
            info: [
              {
                title: "Population",
                description: card.population.toLocaleString(),
              },
              { title: "Region", description: card.region },
              { title: "Capital", description: card.capital[0] },
            ],
          };
          return (
            <Card
              key={card.name.official}
              onClick={() => navigate(`/country/${card.name.common}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
