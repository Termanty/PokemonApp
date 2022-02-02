import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import PokeCard from "./PokeCard";
import Loader from "./Loader";

async function loadPokemons(url, setUrl) {
  const res = await fetch(url);
  const data = await res.json();
  setUrl(data.next);
  const fetches = data.results.map((p) => fetch(p.url).then((r) => r.json()));
  return await Promise.all(fetches);
}

function Pokelist(props) {
  const startUrl = "https://pokeapi.co/api/v2/pokemon";
  const [url, setUrl] = useState(startUrl);
  const [pokes, setPokes] = useState([]);
  const loading = pokes.length ? false : true;

  useEffect(() => {
    loadPokemons(url, setUrl).then((ps) => setPokes(ps));
  }, []);

  console.log(pokes);
  console.log(url);
  console.log(Object.keys(localStorage));

  const clickHandler = () => {
    loadPokemons(url, setUrl).then((ps) => setPokes([...pokes, ...ps]));
  };

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
          <div className="d-grid">
            <Button onClick={clickHandler}>Load more ...</Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Pokelist;
