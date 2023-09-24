import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";
import { ALL_COUNTRIES } from "../constants";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((card) => {
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
