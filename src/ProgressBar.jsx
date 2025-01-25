import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [currPercentage, setCurrPercentage] = useState(0);

  useEffect(() => {
    if (currPercentage < 100) {
      setTimeout(() => {
        setCurrPercentage((prev) => prev + 1);
        const progress = document.getElementsByClassName("progress")[0];
        progress.style.width = `${currPercentage + 1}%`;
      }, [50]);
    }

    if (currPercentage > 50) {
      const progressText = document.getElementsByClassName("percentageText")[0];
      progressText.style.color = "#fff";
    }
  }, [currPercentage]);

  return (
    <div className="progressBarContainer">
      <span className="heading">Progress Bar</span>
      <div className="progressBar">
        <div className="progress"></div>
        <div className="percentageText">{currPercentage}%</div>
      </div>
    </div>
  );
}
