"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;
    if (!mapContainerRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error("Missing NEXT_PUBLIC_MAPBOX_TOKEN");
      return;
    }

    mapboxgl.accessToken = token;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [168.6626, -45.0312], // Queenstown fallback
      zoom: 13,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-[70vh] w-full rounded-2xl overflow-hidden"
    />
  );
}
