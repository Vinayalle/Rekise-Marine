import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import MissionModal from "./components/MissionModal";
import PolygonModal from "./components/PolygonModal";

const App = () => {
  const [showMissionModal, setShowMissionModal] = useState(false);
  const [showPolygonModal, setShowPolygonModal] = useState(false);
  const [waypoints, setWaypoints] = useState([]);
  const [polygonPoints, setPolygonPoints] = useState([]);

  const toggleMissionModal = () => setShowMissionModal(!showMissionModal);
  const togglePolygonModal = () => setShowPolygonModal(!showPolygonModal);

  return (
    <div className="App">
      <h1>Rekise Marine - Mission Planner</h1>
      <button onClick={toggleMissionModal}>View Mission</button>
      <MapComponent
        waypoints={waypoints}
        setWaypoints={setWaypoints}
        setShowPolygonModal={togglePolygonModal}
        setPolygonPoints={setPolygonPoints}
      />
      {showMissionModal && (
        <MissionModal waypoints={waypoints} onClose={toggleMissionModal} />
      )}
      {showPolygonModal && (
        <PolygonModal
          polygonPoints={polygonPoints}
          onClose={togglePolygonModal}
        />
      )}
    </div>
  );
};

export default App;
