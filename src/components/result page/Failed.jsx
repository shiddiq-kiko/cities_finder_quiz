import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetRedux } from "../../store/actionCreator";

export default function Lose() {
  const dispatch = useDispatch();
  const history = useHistory();

  const cityPlaced = useSelector((state) => state.cityPlaced);
  const correct = useSelector((state) => state.correct);

  const playAgain = () => {
    dispatch(resetRedux());
    history.push("/");
  };

  return (
    <>
      <div>
        <div className="result">
          <h1>Failed</h1>
          <a onClick={playAgain} className="btn">
            <h6>click to play again</h6>
          </a>
          <div className="text-center">
            <h3>correct cities: {correct}</h3>
            <h3>city pinned: {cityPlaced}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
