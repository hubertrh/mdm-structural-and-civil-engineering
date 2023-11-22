"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect } from "react";
import LenisContext from "../contexts/LenisContext";

type MapboxProps = {
  token: string;
};

export default function Mapbox({ token }: MapboxProps) {
  const lenis = useContext(LenisContext); // To allow disabling of Lenis

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

    // Function to prevent page scroll when hovering over the map
    const container = document.getElementById("mapbox-container");
    if (!container) return;

    const disableLenis = () => lenis && lenis.stop();
    const enableLenis = () => lenis && lenis.start();

    container.addEventListener("mouseenter", disableLenis);
    container.addEventListener("mouseleave", enableLenis);

    // Cleanup
    return () => {
      container.removeEventListener("mouseenter", disableLenis);
      container.removeEventListener("mouseleave", enableLenis);
    };
  }, [lenis]);

  return (
    <div
      id="mapbox-container"
      className="aspect-square h-96 w-96 scale-90 overflow-hidden rounded-full sm:scale-100"
    />
  );
}
