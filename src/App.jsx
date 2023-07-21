import React from "react";
import Welcome from "./components/Welcome.jsx";
import Support from "./components/Support.jsx";

function App() {
  const groupName = 'StarGazers';
  return (
    <div className="container">
      <article>
        <img src="../public/images/group.svg" alt="StarGazers"/>
        <hgroup>
          <Welcome name={groupName} />
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>
        <Support />
      </article>
    </div>
  )
}
export default App
