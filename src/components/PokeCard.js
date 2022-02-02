import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

function PokeCard({ poke }) {
  const initial = localStorage.getItem(poke.name) === "favorite";
  const [favorite, setFaforite] = useState(initial);

  const favHandler = (e) => {
    if (favorite) {
      localStorage.removeItem(poke.name);
      setFaforite(false);
      return;
    }
    localStorage.setItem(poke.name, "favorite");
    setFaforite(true);
  };

  const title = poke.name[0].toUpperCase() + poke.name.slice(1);
  return (
    <Card bg="dark" text="light">
      <Card.Header className="d-flex justify-content-between">
        {title}
        {favorite ? (
          <HeartFill color="red" size="25" onClick={favHandler} />
        ) : (
          <Heart onClick={favHandler} size="25" />
        )}
      </Card.Header>
      <Card.Body>
        <Card.Img src={poke.sprites.other.home.front_default} />
        <div className="d-grid">
          <LinkContainer to={`/${poke.name}`}>
            <Button size="sm" variant="outline-secondary">
              Details
            </Button>
          </LinkContainer>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PokeCard;
