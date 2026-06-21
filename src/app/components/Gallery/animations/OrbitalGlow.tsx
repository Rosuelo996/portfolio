const OrbitalGlow = () => {
  return (
    <div className="orbital">
      {Array.from({ length: 20 }).map((_, index) => (
        <span key={index} style={{ "--i": index + 1 } as React.CSSProperties} />
      ))}
    </div>
  );
};

export default OrbitalGlow;
