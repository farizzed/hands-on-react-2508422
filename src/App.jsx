function App() {
  const groupName = 'StarGazers';
  const groupNameStyle = {color:"steelblue"}
  const onClickMe = () => {
    alert('Hi there!');
  }
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazers"/>
        <hgroup>
            <h1>Meet the <i style={groupNameStyle}>{groupName}</i></h1>
            <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>
        <button className="outline" onClick={onClickMe}>Click me</button>
      </article>
    </div>
  )
}
export default App
