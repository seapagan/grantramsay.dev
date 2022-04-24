import React from "react";

import ProjectList from "./components/ProjectList";
import { settings } from "./configure/settings";

import "./App.scss";

function App() {
  return (
    <div className="app">
      GRANTRAMSAY.DEV
      <ProjectList projects={settings.projects} />
    </div>
  );
}

export default App;
