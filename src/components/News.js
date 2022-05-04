import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getNews } from "../store/actions";
import NewsItem from "./NewsItem";

export default function News() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Container>
      <h2 className="text-center mb-4 mt-4">News</h2>
      <Container className="d-flex p-2 flex-wrap justify-content-center">
        {news.map(({ author, title, urlToImage }) => (
          <NewsItem key={title} {...{ author, title, urlToImage }} />
        ))}
      </Container>
      <div className="w-100 mt-2 fixed-top p-3 ">
        <Link to="/">Back</Link>
      </div>
    </Container>
  );
}
