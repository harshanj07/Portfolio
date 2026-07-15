import React, { useEffect, useState } from "react";

function Pre(props) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!props.load) {
      setPercent(100);
      return;
    }
    
    // Smooth counter from 0 to 100 over ~1000ms
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate/decelerate counting for realistic feel
        const step = prev < 30 ? 4 : prev < 70 ? 8 : prev < 90 ? 3 : 1;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [props.load]);

  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="preloader-monogram">HJ</div>
      <div className="preloader-bar-bg">
        <div 
          className="preloader-bar-fill" 
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="preloader-percent">
        {String(percent).padStart(3, "0")}%
      </div>
    </div>
  );
}

export default Pre;
