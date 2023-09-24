import axios from "axios";
import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import List from "./components/List";
import Card from "./components/Card";
import { ALL_COUNTRIES } from "./constants";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Header />
      <MainContent>
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
            return <Card key={card.name.official} {...countryInfo} />;
          })}
        </List>
      </MainContent>
    </>
  );
}

export default App;
