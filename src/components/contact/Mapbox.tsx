"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

type MapboxProps = {
  token: string;
};

export default function Mapbox({ token }: MapboxProps) {
  const [mapError, setMapError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token is provided
    if (!token) {
      setMapError("Map unavailable: Missing configuration");
      setIsLoading(false);
      return;
    }

    // Check for WebGL support
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setMapError("Map unavailable: WebGL not supported");
      setIsLoading(false);
      return;
    }

    mapboxgl.accessToken = token;

    try {
      const map = new mapboxgl.Map({
        container: "mapbox-container", // container ID
        style: "mapbox://styles/rogalaharacz/clp8teq35000x01qtc9y09jom", // style URL
        center: [-0.020247, 51.49139], // starting position [lng, lat]
        zoom: 9.5, // starting zoom
      });

      map.on('load', () => {
        setIsLoading(false);
        
        // Create a new marker.
        new mapboxgl.Marker({
          color: "#5881A1",
        })
          .setLngLat([0.0938438, 51.4515359])
          .addTo(map);
      });

      map.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError("Map unavailable: Failed to load");
        setIsLoading(false);
      });

      // Cleanup function
      return () => {
        map.remove();
      };
    } catch (error) {
      console.error('Failed to initialize map:', error);
      setMapError("Map unavailable: Initialization failed");
      setIsLoading(false);
    }
  }, [token]);

  if (mapError) {
    return (
      <div className="aspect-square size-[22rem] scale-90 overflow-hidden rounded-full xs:size-96 sm:scale-100 bg-background-blue flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-blue-dark text-sm mb-2">📍</div>
          <div className="text-blue-dark text-xs">
            <div className="font-medium">Visit us at:</div>
            <div>London, UK</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 aspect-square size-[22rem] scale-90 overflow-hidden rounded-full xs:size-96 sm:scale-100 bg-background-blue flex items-center justify-center z-10">
          <div className="text-blue-dark text-sm">Loading map...</div>
        </div>
      )}
      <div
        id="mapbox-container"
        className="aspect-square size-[22rem] scale-90 overflow-hidden rounded-full xs:size-96 sm:scale-100"
      />
    </div>
  );
}
