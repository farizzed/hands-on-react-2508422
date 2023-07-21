import React from "react";

/* Component class with React Component */
class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Meet the {this.props.name}</h1>
  }
}

/* Component with React Hooks */
const Hello = (props) => {
  const colorSteelBlue = {color:"steelblue"}
  return <h1>Meet the <i style={colorSteelBlue}>{props.name}</i></h1>
}

function App() {
  const groupName = 'StarGazers';
  const onClickMe = () => {
    alert('Hi there!');
  }
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazers"/>
        <hgroup>
          <Welcome name={groupName} />
          <Hello name="Aliens" />
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>
        <button className="outline" onClick={onClickMe}>Click me</button>
      </article>
    </div>
  )
}
export default App
