import React from "react";
import { Card } from "react-bootstrap";

export default function NewsItem({ author, title, urlToImage }) {
  return (
    <Card style={{ width: "15rem" }} className="mb-4">
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
