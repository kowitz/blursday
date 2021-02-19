import { observer } from "mobx-react-lite";

import style from "./settings.module.css";

const Settings = observer(({ appState }) => {
  return (
    <div>
      <button onClick={() => appState.navigate("HOME")}>Back home</button>
      <h1>Settings</h1>
      <h4>Color</h4>
      <ColorSwatch appState={appState} color="white" name="White" />
      <ColorSwatch appState={appState} color="red" name="Red" />
    </div>
  );
});

const ColorSwatch = observer(({ appState, color, name }) => {
  const swatchChanged = (e) => {
    if (e.target.checked) {
      appState.color = color;
    }
  };

  return (
    <div className={style.swatch}>
      <input
        type="radio"
        name="ColorSwatch"
        value={color}
        id={color}
        checked={appState.color === color}
        onChange={swatchChanged}
      />
      <label htmlFor={color}>{name}</label>
    </div>
  );
});

export default Settings;
