import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

import "./App.css";

import Home from "./routes/home.js";
import Settings from "./routes/settings.js";

class AppState {
  view = "HOME";
  day = "Monday";
  color = "white";

  navigate(view) {
    this.view = view;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const appState = new AppState();

const App = observer(() => {
  let ActiveView = Home;
  if (appState.view === "SETTINGS") ActiveView = Settings;

  return <ActiveView appState={appState} />;
});

export default App;
