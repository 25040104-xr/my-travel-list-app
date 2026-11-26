export default function SplitFlap({ text, length = 0, flipKey = "", className = "" }) {
  const chars = String(text).padEnd(length, " ").split("");

  return (
    <span className={`split-flap ${className}`} aria-label={String(text)}>
      {chars.map((char, i) => (
        <span
          key={`${flipKey}-${i}`}
          className="flap"
          style={{ animationDelay: `${i * 0.03}s` }}
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
