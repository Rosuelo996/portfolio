import Tilt from "react-parallax-tilt";

type TiltCardProps = {
  children: React.ReactNode;
};

export default function TiltCard({ children }: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1200}
      scale={1}
      transitionSpeed={700}
      glareEnable={false}
    >
      {children}
    </Tilt>
  );
}
