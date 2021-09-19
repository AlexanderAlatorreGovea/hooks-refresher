import React, { useEffect, useState } from "react";

function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
        console.log('unmounted')
        window.removeEventListener("mousemove", logMousePosition)
    }
  }, []);
  return (
    <div>
      HOOKSX - {x} Y - {y}
    </div>
  );
}

export default Mouse;
