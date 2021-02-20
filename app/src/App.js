import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";

import "./App.css";

import AppState from "./AppState.js";
import Home from "./components/Home.js";
import Settings from "./components/Settings.js";

const appState = new AppState();

const App = observer(() => {
  let ActiveView = Home;
  if (appState.view === "SETTINGS") ActiveView = Settings;

  useEffect(() => {
    autorun(() => {
      // TODO: Try putting this on a Theme DOM element instead
      document.body.className = `colorTheme--${appState.colorTheme}`;
    });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <ActiveView appState={appState} styles={{ backgroundColor: "#000" }} />
    </div>
  );
});

export default App;
