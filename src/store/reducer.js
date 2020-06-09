import {
  CHANGE_CITY_TO_FIND,
  CHANGE_LOADING,
  CHANGE_INDEX,
  CHANGE_SCORE,
  CHANGE_CITY_PLACED,
  RESET_REDUX,
  CHANGE_CORRECT,
} from "./actionTypes";
import data from "../assets/cities";

const initialState = {
  loading: false,
  index: 0,
  cityToFindName: data.cities[0].name,
  score: 1500,
  cityPlaced: 0,
  cityToFindLat: data.cities[0].position.lat,
  cityToFindLng: data.cities[0].position.lng,
  correct: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUX: {
      return initialState;
    }
    case CHANGE_LOADING: {
      return { ...state, loading: action.payload };
    }
    case CHANGE_INDEX: {
      return { ...state, index: state.index + 1 };
    }
    case CHANGE_CITY_TO_FIND: {
      if (state.index < data.cities.length) {
        return {
          ...state,
          cityToFindName: data.cities[state.index].name,
          cityToFindLat: data.cities[state.index].position.lat,
          cityToFindLng: data.cities[state.index].position.lng,
        };
      } else {
        return state;
      }
    }
    case CHANGE_SCORE: {
      return { ...state, score: state.score - action.payload };
    }
    case CHANGE_CITY_PLACED: {
      return { ...state, cityPlaced: action.payload };
    }
    case CHANGE_CORRECT: {
      return { ...state, correct: action.payload };
    }
    default:
      return state;
  }
}
