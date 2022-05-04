import React from "react";
import { Card, Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Navbar bg="light">
        <Nav className="justify-content">
          <NavItem eventkey={1} className="p-3">
            <Link to="/profile">Profile</Link>
          </NavItem>
          <NavItem eventkey={2} className="p-3">
            <Link to="/signup">Sign up</Link>
          </NavItem>
          <NavItem eventkey={3} className="p-3">
            <Link to="/login">Log in</Link>
          </NavItem>
          <NavItem eventkey={4} className="p-3">
            <Link to="/news">News</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Home page</h2>
        </Card.Body>
      </Card>
    </Container>
  );
}
