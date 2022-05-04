import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const SET_NEWS = "SET_NEWS";

const inititalState = {
  news: [],
  isFetching: true,
};

export const setNews = (news) => ({ type: SET_NEWS, payload: news });

function newsReducer(state = inititalState, action) {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  news: newsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
