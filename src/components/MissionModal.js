import React from "react";

const MissionModal = ({ waypoints, onClose }) => {
  return (
    <div className="modal">
      <h2>Mission Waypoints</h2>
      <ul>
        {waypoints.map((point, index) => (
          <li key={index}>{`WP(${index}): ${point.join(", ")}`}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MissionModal;
