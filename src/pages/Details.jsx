import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../constants";
import { Button } from "../components/Button";
import Info from "../components/Info";

const Details = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} navigate={navigate} />}
    </div>
  );
};

export default Details;
