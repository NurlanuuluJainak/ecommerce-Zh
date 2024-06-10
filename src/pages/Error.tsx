import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="notFound">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to={"/"} replace={true}>
        Похоже, вы попали на несуществующую страницу. <br />
        Как насчет того, чтобы вернуться в безопасное место?
      </Link>
    </Container>
  );
};

export default Error;


