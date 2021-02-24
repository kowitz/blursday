import React from "react";
import { observer } from "mobx-react-lite";
import { makeAutoObservable, autorun } from "mobx";

import Home from "./components/Home.js";
import { colorTheme, progressPeriod } from "./settings";

import "./App.css";

// Simple Date function
const DAYS_OF_WEEK = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

// Initial Mobx app state, provided by a React context
const params = new URLSearchParams(window.location.search);
class AppState {
  settings = { colorTheme, progressPeriod };
  context = {
    isChromeExtensionCapable: !!window.chrome, // TODO: Improve feature detection
    isEmbeded: params.get("embeded") === "1",
  };
  constructor() {
    this.updateDayOfWeek();
    makeAutoObservable(this);
  }
  updateDayOfWeek() {
    this.dayOfWeek = DAYS_OF_WEEK[new Date().getDay()];
  }
}
const appState = new AppState();
export const AppStateContext = React.createContext(appState);

// Update the day of week every second
setInterval(() => {
  appState.updateDayOfWeek();
}, 1000);

// When embeded in a Chrome Extension new tab,
// send the background color to the parent window
autorun(() => {
  const color = appState.settings.colorTheme.current.backgroundColor;
  window.parent.postMessage({ backgroundColor: color }, "*");
});

const App = observer(() => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: appState.settings.colorTheme.current.backgroundColor,
      }}
    >
      <AppStateContext.Provider value={appState}>
        <Home />
      </AppStateContext.Provider>
    </div>
  );
});

export default App;
