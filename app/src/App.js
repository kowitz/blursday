import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";

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
