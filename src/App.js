import { observer } from "mobx-react-lite";
import { makeAutoObservable, autorun } from "mobx";

import Home from "./components/Home.js";
import { colorTheme, progressPeriod } from "./settings";

import "./App.css";

class AppState {
  settings = { colorTheme, progressPeriod };
  constructor() {
    makeAutoObservable(this);
  }
}

const appState = new AppState();

// When embeded in a Chrome Extension new tab,
// send the background color to the parent window
autorun(() => {
  const color = appState.settings.colorTheme.current.backgroundColor;
  console.log("Posting background color to parent");
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
      <Home appState={appState} />
    </div>
  );
});

export default App;
