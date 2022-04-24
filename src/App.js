import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import { settings } from "./configure/settings";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <ProjectList projects={settings.projects} />
      <Footer />
    </div>
  );
}

export default App;
