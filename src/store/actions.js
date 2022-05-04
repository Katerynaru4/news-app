import axios from "axios";
import { setNews } from "./index";

export const getNews = () => async (dispatch) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
  dispatch(setNews(response.data.articles));
};
