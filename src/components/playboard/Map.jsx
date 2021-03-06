import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import GoogleMapReact from "google-map-react";
import Distance from "../../helpers/Distance.jsx";
import MapConfig from "../../config/MapConfig";
import Cities from "../../assets/cities";
import Swal from "sweetalert2";
import Loading from "../../helpers/Loading.jsx";

import {
  setLoading,
  setScore,
  setQuestion,
  setCityPlaced,
  setCorrect,
} from "../../store/actionCreator";

export default function Map() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [pins, setPins] = useState([]);

  const cityToFindLat = useSelector((state) => state.cityToFindLat);
  const cityToFindLng = useSelector((state) => state.cityToFindLng);
  const index = useSelector((state) => state.index);
  const loading = useSelector((state) => state.loading);
  const cityToFindName = useSelector((state) => state.cityToFindName);
  const correct = useSelector((state) => state.correct);
  const cityPlaced = useSelector((state) => state.cityPlaced);

  const mapOptionsConfig = () => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      styles: MapConfig,
    };
  };

  const onClickDistance = async ({ lat, lng }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setCityPlaced(cityPlaced + 1));
      const origin = `${cityToFindLat},${cityToFindLng}`;
      const destination = `${lat},${lng}`;

      let newPin = { lat, lng };
      setPins([...pins, newPin]);

      const { data } = await Distance(origin, destination);

      const distance = Math.ceil(
        data.rows[0].elements[0].distance.value / 1000
      );

      if (distance <= 50) {
        Swal.fire({
          icon: "success",
          title: "Correct!",
          text: `Distance from the target coordinate: ${distance} km`,
          background:
            "url(https://media.giphy.com/media/hpEjtJ7gTyuC9BbKvl/giphy.gif)",
        });
        dispatch(setCorrect(correct + 1));
        dispatch(setScore(distance));
        dispatch(setLoading(false));

        dispatch(setQuestion());
      } else {
        dispatch(setScore(distance));
        dispatch(setLoading(false));

        Swal.fire({
          icon: "error",
          title: `Oops, that's not ${cityToFindName}`,
          text: `Distance from the target coordinate: ${distance} km`,
          background: `url(https://media1.tenor.com/images/39842901e9cf82e15e4bd6dad416acc4/tenor.gif?itemid=5694917)`,
        });
      }
    } catch (error) {
      Swal.fire(
        `I'm sorry`,
        `There's some error while measuring the distance`,
        "question"
      );
      dispatch(setLoading(false));
      if (cityPlaced === 0) {
        dispatch(setCityPlaced(0));
      } else {
        dispatch(setCityPlaced(cityPlaced - 1));
      }
    }
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (index === Cities.cities.length) {
    history.push("/success");
  }
  return (
    <>
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          options={mapOptionsConfig}
          defaultCenter={{
            lat: 54.526,
            lng: 15.2551,
          }}
          defaultZoom={3}
          onClick={onClickDistance}
        ></GoogleMapReact>
      </div>
    </>
  );
}
