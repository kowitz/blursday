import { observer } from "mobx-react-lite";

import "./App.css";

import AppState from "./AppState.js";
import Home from "./components/Home.js";
import Settings from "./components/Settings.js";

const appState = new AppState();

const App = observer(() => {
  let ActiveView = Home;
  if (appState.view === "SETTINGS") ActiveView = Settings;

  return (
    <div
      className={`colorTheme--${appState.colorTheme} appFrame`}
      style={{ height: "100%" }}
    >
      <ActiveView appState={appState} styles={{ backgroundColor: "#000" }} />
    </div>
  );
});

export default App;
