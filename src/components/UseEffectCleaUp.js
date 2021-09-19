import React, { useState } from "react";
import Mouse from "./Mouse";

function UseEffectCleaUp() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <Mouse />}
    </div>
  );
}

export default UseEffectCleaUp;
