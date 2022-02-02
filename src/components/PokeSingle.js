import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Loader from "./Loader";

function PokeSingle() {
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  const [poke, setPoke] = useState();
  let isLoading = poke === undefined ? true : false;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then((data) => {
        setPoke(data);
      });
  }, []);

  console.log(poke);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <h1>{poke.name}</h1>
          <img src={poke.sprites.other.home.front_default} />
          <p>Base experience: {poke.base_experience}</p>
          <p>height: {poke.height * 10} cm</p>
          <p>weight: {poke.weight / 10} kg</p>
          <p>type:</p>
          <ul>
            {poke.types.map((p, idx) => (
              <li key={idx}>{p.type.name}</li>
            ))}
          </ul>

          <Button onClick={() => navigate("/pokelist")}>Back to list</Button>
        </div>
      )}
    </div>
  );
}

export default PokeSingle;
