import React from "react";

import Skills from "./Skills";

export default function App() {
  return (
    <div className="App">
      <Skills items={["skill1", "skill2", "skill3"]} />
    </div>
  );
}
