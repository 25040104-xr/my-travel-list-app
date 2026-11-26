import { useState, useEffect } from "react";

export default function Logo() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const clock = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="logo">
      <div>
        <p className="logo-sub">My Travel List</p>
        <h1>
          Departures <span className="slash">/</span> Packing
        </h1>
      </div>
      <div className="logo-clock">
        <span className="clock">{clock}</span>
        <span className="gate">GATE 023</span>
      </div>
    </header>
  );
}
