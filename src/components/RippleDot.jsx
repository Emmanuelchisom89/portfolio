const RippleDot = ({ size = 8 }) => {
  const color = "#646cff";

  return (
    <span className="relative flex items-center justify-center">
      {/* Center dot */}
      <span
        className="relative z-10 rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />

      {/* Inner ripple */}
      <span
        className="absolute rounded-full border opacity-50 animate-ping"
        style={{
          width: size * 2,
          height: size * 2,
          borderColor: color,
        }}
      />

      {/* Outer ripple (reduced spread) */}
      <span
        className="absolute rounded-full border opacity-30 animate-[ping_2.5s_ease-out_infinite]"
        style={{
          width: size * 2.8,
          height: size * 2.8,
          borderColor: color,
        }}
      />
    </span>
  );
};

export default RippleDot;
