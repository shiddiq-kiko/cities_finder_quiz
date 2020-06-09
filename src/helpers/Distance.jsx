import axios from "axios";

export default function distance(origin, destination) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.REACT_APP_GOOGLE_KEY}`
  );
}
