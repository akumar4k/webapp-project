const Gauge = () => {
  const separators = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

  return (
    <div className="gauge">
      <div className="gauge-level" style={{ height: `${70}%` }}>
        {separators.map((position) => (
          <div
            key={position}
            className="separator"
            style={{ bottom: `${position}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gauge;
