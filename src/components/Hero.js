import React from "react";

export default function Header() {
  return (
    <header>
      <h2 className="header--title">
        Hello<span className="stroke">,</span>I<span className="stroke">'</span>
        m
      </h2>
      <h1 className="header--title">
        Kévin B<span className="stroke">.</span>
      </h1>
      <h2 className="header--subtitle">Problem Solver</h2>
    </header>
  );
}
