import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const incrementSupportCount = () => {
    setCount(count + 1);
  };

  return (
    <button className="outline" onClick={incrementSupportCount}>
      {count === 0 ? "Support me!" : `Supported ${count} time(s)`}
    </button>)
}