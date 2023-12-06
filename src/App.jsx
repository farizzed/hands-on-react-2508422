import React, { useState } from "react";
import ListCasts from "./components/ListCasts.jsx";
import MemberModal from "./components/MemberModal.jsx";

function App() {
  const [memberInfo, setMemberInfo] = useState(null);

  return (
    <div className="container">
        <img src="images/group.svg" alt="StarGazers"/>
        <h1>Meet the StarGazers</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCasts onClickMember={ (info) => { setMemberInfo(info) }} />

        { memberInfo && <MemberModal
          member={memberInfo}
          handleClose={() => setMemberInfo(null)}
        /> }
    </div>
  )
}
export default App
