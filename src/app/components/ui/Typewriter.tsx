import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  text: string;
};

const Typewriter = ({ text }: Props) => {
  const [typedText, setTypedText] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    if (typedText === text) return;

    const timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, typedText === "" ? 250 : 45,
    );

    return () => clearTimeout(timeout);
  }, [typedText, text, inView]);

  return (
    <p ref={ref} className="section__description--highlight">
      {typedText}
      {typedText !== text && <span className="typewriter__caret"></span>}
    </p>
  );
};

export default Typewriter;
