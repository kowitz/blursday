import { observer } from "mobx-react-lite";

import "./App.css";

import AppState from "./AppState.js";
import Home from "./routes/home.js";
import Settings from "./routes/settings.js";

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
