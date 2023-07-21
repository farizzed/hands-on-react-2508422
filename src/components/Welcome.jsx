export default (props) => {
  const colorSteelBlue = {color:"steelblue"}
  return <h1>Meet the <i style={colorSteelBlue}>{props.name}</i></h1>
}