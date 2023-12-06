import { React, useState } from "react";
import ListCasts from "./components/ListCasts.jsx";

function App() {
  const [memberInfo, setMemberInfo] = useState(null);

  return (
    <div className="container">
        <img src="images/group.svg" alt="StarGazers"/>
        <h1>Meet the StarGazers</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCasts onClickMember={ (info) => { setMemberInfo(info) }} />

        { memberInfo &&
          <article style={{display: "flex", gap: "2rem"}}>
            <img style={{width: "150px"}} src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name}/>
            <hgroup>
              <h1>{memberInfo.name}</h1>
              <p>{memberInfo.bio}</p>
            </hgroup>
          </article>
        }
    </div>
  )
}
export default App
