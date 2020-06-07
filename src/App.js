import React from "react";
import "./Hello.css";
function App() {
  return (
    <div className="header">
      <p>
        Hello <strong>Muhammad Bilal</strong>
      </p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Pricing</li>
      </ul>

      <p>Simple Math through JSX 5+1 = {5 + 1}</p>
    </div>
  );
}

export default App;
