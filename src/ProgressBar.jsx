import { useEffect, useState } from "react";

export default function ProgressBar({ duration = 50 }) {
  const [currPercentage, setCurrPercentage] = useState(0);

  useEffect(() => {
    if (currPercentage < 100) {
      const timer = setTimeout(() => {
        setCurrPercentage((prev) => prev + 1);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [currPercentage]);

  const progressStyle = {
    width: `${currPercentage}%`,
    background: "#2c8558",
    height: "100%",
    borderRadius: "8px",
    transition: "width 0.3s ease",
  };

  const percentageTextStyle = {
    position: "absolute",
    left: "50%",
    color: "#000",
    fontSize: "14px",
    fontWeight: "600",
    color: currPercentage > 55 ? "#fff" : "#000",
  };

  return (
    <div className="progressBarContainer">
      <span className="heading">Progress Bar</span>
      <div className="progressBar">
        <div style={progressStyle}></div>
        <div style={percentageTextStyle}>{currPercentage}%</div>
      </div>
    </div>
  );
}
