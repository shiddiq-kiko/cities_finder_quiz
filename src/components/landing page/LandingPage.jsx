import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetRedux } from "../../store/actionCreator";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetRedux());
  }, []);

  return (
    <>
      <div className="landing-page">
        <h2 className="game-title">Cities Finder</h2>
        <Link to="/playboard" className="btn btn-primary">
          Play
        </Link>
      </div>
    </>
  );
}
