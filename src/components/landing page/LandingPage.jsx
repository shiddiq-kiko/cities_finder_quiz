import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLoading, resetRedux } from "../../store/actionCreator";

import Loading from "../../helpers/Loading.jsx";

export default function LandingPage() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(resetRedux());
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <div className="landing-page">
        <h2
          style={{ fontFamily: "'Chewy', cursive", fontSize: 50 }}
          className="game-title"
        >
          Cities Finder
        </h2>
        <Link to="/playboard" className="btn btn-primary">
          Play
        </Link>
      </div>
    </>
  );
}
