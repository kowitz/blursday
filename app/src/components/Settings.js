import { observer } from "mobx-react-lite";

import style from "./Settings.module.css";

const COLOR_THEMES = [
  { id: "default", name: "Default" },
  { id: "blackAndWhite", name: "Black & White" },
];

const Settings = ({ appState }) => {
  return (
    <div>
      <button onClick={() => appState.navigate("HOME")}>Back home</button>
      <h1>Settings</h1>
      <h4>Color</h4>
      {COLOR_THEMES.map((c) => (
        <ColorSwatch
          appState={appState}
          colorId={c.id}
          name={c.name}
          key={c.id}
        />
      ))}
    </div>
  );
};

const ColorSwatch = observer(({ appState, colorId, name }) => {
  const swatchChanged = (e) => {
    if (e.target.checked) {
      appState.setColorTheme(colorId);
    }
  };

  return (
    <div className={style.swatch}>
      <input
        type="radio"
        name="ColorSwatch"
        value={colorId}
        id={colorId}
        checked={appState.colorTheme === colorId}
        onChange={swatchChanged}
      />
      <label htmlFor={colorId}>{name}</label>
    </div>
  );
});

export default Settings;
