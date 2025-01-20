import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { Vector as VectorLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Vector as VectorSource } from "ol/source";
import { Draw } from "ol/interaction";

const MapComponent = ({ waypoints, setWaypoints }) => {
  const mapRef = useRef(null);
  const vectorSource = useRef(new VectorSource()); // Use a ref to persist the source

  useEffect(() => {
    // Initialize layers
    const baseLayer = new TileLayer({
      source: new OSM(),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource.current,
    });

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [baseLayer, vectorLayer], // Ensure only valid layers are passed
      view: new View({
        center: [0, 0], // Adjust center based on your requirement
        zoom: 2,
      }),
    });

    // Add drawing interaction for LineString
    const draw = new Draw({
      source: vectorSource.current,
      type: "LineString",
    });

    map.addInteraction(draw);

    // Capture coordinates on draw end
    draw.on("drawend", (event) => {
      const coordinates = event.feature.getGeometry().getCoordinates();
      setWaypoints(coordinates); // Update waypoints state
    });

    // Cleanup on component unmount
    return () => {
      map.setTarget(null);
    };
  }, [setWaypoints]);

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "500px" }} />
  );
};

export default MapComponent;
