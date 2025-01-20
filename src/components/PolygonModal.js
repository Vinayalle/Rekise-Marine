import React from "react";

const PolygonModal = ({ polygonPoints, onClose }) => {
  return (
    <div className="modal">
      <h2>Polygon Waypoints</h2>
      <ul>
        {polygonPoints.map((ring, index) => (
          <li key={index}>
            Ring {index}: {ring.map((point) => point.join(", ")).join(" | ")}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PolygonModal;
