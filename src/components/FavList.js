import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PokeCard from "./PokeCard";
import Loader from "./Loader";

async function loadFavPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const favPokemons = Object.keys(localStorage);
  const fetches = favPokemons.map((pokemon) =>
    fetch(url + "/" + pokemon).then((res) => res.json())
  );
  return await Promise.all(fetches);
}

function FavList() {
  const [pokes, setPokes] = useState([]);
  const loading = pokes.length ? false : true;

  useEffect(() => {
    loadFavPokemons()
      .catch((error) => console.log(error))
      .then((ps) => setPokes(ps));
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {!loading && (
        <>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="justify-center my-5 d-flex gap-4"
          >
            {pokes.map((poke, idx) => (
              <PokeCard poke={poke} key={idx}></PokeCard>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default FavList;
