import axios from "axios";
import { setNews } from "./index";

export const getNews = () => async (dispatch) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e61c439194f54519b9d9123ee438a160`
  );
  dispatch(setNews(response.data.articles));
};
