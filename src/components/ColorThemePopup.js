import { useContext } from "react";

import { AppStateContext } from "../App.js";
import style from "./ColorThemePopup.module.css";

const ColorThemePopup = () => {
  const appState = useContext(AppStateContext);
  return (
    <div className={style.popup}>
      {appState.settings.colorTheme.options.map((c) => (
        <ColorSwatch key={c.id} colorOption={c} />
      ))}
    </div>
  );
};

const ColorSwatch = ({ colorOption }) => {
  const appState = useContext(AppStateContext);
  const classNames = [style.swatch];
  if (colorOption === appState.settings.colorTheme.current)
    classNames.push(style.swatchSelected);

  function select() {
    appState.settings.colorTheme.selectOption(colorOption);
  }

  return (
    <button
      className={classNames.join(" ")}
      title={colorOption.name}
      style={{ backgroundColor: colorOption.backgroundColor }}
      onClick={select}
    ></button>
  );
};

export default ColorThemePopup;
