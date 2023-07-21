import { useState, useEffect } from "react";

const pageTitle = document.title;

export default () => {
  /* Define count state with initial state value of 0 */
  const [count, setCount] = useState(0);

  /* Increment the count value and use setCount to update the state value */
  const incrementSupportCount = () => {
    setCount(count + 1);
  };

  /* Use effect is to trigger side effect based on state of the component */
  useEffect(() => {
    /* If count is not as same as initial state (which is 0), update the page title */
    count && (document.title = `${pageTitle} - ${count}`);
  });

  return (
    <button className="outline" onClick={incrementSupportCount}>
      {count === 0 ? "Support me!" : `Supported ${count} time(s)`}
    </button>)
}