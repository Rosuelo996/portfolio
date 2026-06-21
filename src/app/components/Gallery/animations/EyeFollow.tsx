"use client";

import { useRef } from "react";

type Props = {
  mousePosition: {
    x: number;
    y: number;
  };
};

const EyeFollow = ({ mousePosition }: Props) => {
  const leftEyeRef = useRef<HTMLDivElement | null>(null);

  const rightEyeRef = useRef<HTMLDivElement | null>(null);

  function getRotation(eye: HTMLDivElement | null) {
    if (!eye) {
      return "rotate(0rad)";
    }

    const eyePosition = eye.getBoundingClientRect();

    const eyeCenterX = eyePosition.left + eyePosition.width / 2;

    const eyeCenterY = eyePosition.top + eyePosition.height / 2;

    const angle = Math.atan2(
      mousePosition.y - eyeCenterY,
      mousePosition.x - eyeCenterX,
    );

    return `rotate(${angle}rad)`;
  }

  return (
    <div className="eyes">
      <div className="eye__wrapper">
        <div
          className="eye"
          ref={leftEyeRef}
          style={{
            transform: getRotation(leftEyeRef.current),
          }}
        >
          <div className="pupil" />
        </div>
      </div>

      <div className="eye__wrapper">
        <div
          className="eye"
          ref={rightEyeRef}
          style={{
            transform: getRotation(rightEyeRef.current),
          }}
        >
          <div className="pupil" />
        </div>
      </div>
    </div>
  );
};

export default EyeFollow;
