import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [currPercentage, setCurrPercentage] = useState(0);

  useEffect(() => {
    if (currPercentage < 100) {
      setTimeout(() => {
        setCurrPercentage((prev) => prev + 1);
      }, [50]);
    }
  }, [currPercentage]);

  return (
    <div className="progressBarContainer">
      <span className="heading">Progress Bar</span>
      <div className=""></div>
      <div className="progressBar">
        <div className="percentageText">{currPercentage}%</div>
      </div>
    </div>
  );
}
