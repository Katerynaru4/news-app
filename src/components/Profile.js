import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Back</Link>
      </div>
    </>
  );
}
