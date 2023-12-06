import React, { useState, useEffect } from "react";
import ListCasts from "./components/ListCasts.jsx";
import CastModal from "./components/CastModal.jsx";

function App() {
  const [casts, setCasts] = useState([]);
  const [castInfo, setCastInfo] = useState(null);

  /* Get casts from json (used to mimic hit API) */
  async function fetchCast() {
    const response = await fetch('cast.json');
    setCasts(await response.json());
  }

  /* Fetch the cast when loaded */
  useEffect(() => {
    fetchCast();
  });

  return (
    <div className="container">
        <img src="images/group.svg" alt="StarGazers"/>
        <h1>Meet the StarGazers</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCasts casts={casts} onClickCast={ (info) => { setCastInfo(info) }} />

        { castInfo && <CastModal
          cast={castInfo}
          handleClose={() => setCastInfo(null)}
        /> }
    </div>
  )
}
export default App
