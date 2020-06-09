import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetRedux } from "../../store/actionCreator";

import Map from "./Map.jsx";
// import Missions from '../components/Missions'

export default function Main() {
  const dispatch = useDispatch();
  const history = useHistory();

  // state
  const score = useSelector((state) => state.score);

  useEffect(() => {
    dispatch(resetRedux());
  }, []);

  if (score <= 0) {
    history.push("/gameover");
  }

  return (
    <>
      <Map />
    </>
  );
}
