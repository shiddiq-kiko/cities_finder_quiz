import React from "react";
import { useSelector } from "react-redux";

export default function Scoreboard() {
  const cityToFindName = useSelector((state) => state.cityToFindName);
  const score = useSelector((state) => state.score);
  const cityPlaced = useSelector((state) => state.cityPlaced);

  return (
    <>
      <div className="scoreboard">
        <div id="scoreboard" style={{ marginTop: 20 }}>
          <div className="scoreboard">
            <div className="scoreboard-item bg-info shadow text-center text-light">
              <p className="scoreboard-text">
                <strong>{score}</strong> Kilometers
              </p>
            </div>
            <div className="scoreboard-item bg-info shadow text-center text-light">
              <p className="scoreboard-text">
                Find: <strong>{cityToFindName}</strong>
              </p>
            </div>
            <div className="scoreboard-item bg-info shadow text-center text-light">
              <p className="scoreboard-text">
                <strong>{cityPlaced}</strong> cities placed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
