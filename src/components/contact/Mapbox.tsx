"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";

type MapboxProps = {
  token: string;
};

export default function Mapbox({ token }: MapboxProps) {
  mapboxgl.accessToken = token;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapbox-container", // container ID
      style: "mapbox://styles/rogalaharacz/clp8teq35000x01qtc9y09jom", // style URL
      center: [-0.0291, 51.497471], // starting position [lng, lat]
      zoom: 9.5, // starting zoom
    });

    // Create a new marker.
    const marker = new mapboxgl.Marker({
      color: "#5881A1",
    })
      .setLngLat([0.0942132, 51.4860491])
      .addTo(map);
  }, []);

  return (
    <div
      id="mapbox-container"
      className="aspect-square h-[22rem] w-[22rem] scale-90 overflow-hidden rounded-full xs:h-96 xs:w-96 sm:scale-100"
    />
  );
}
