import style from "./ColorThemePopup.module.css";

const ColorThemePopup = ({ appState }) => {
  return (
    <div className={style.popup}>
      {appState.settings.colorTheme.options.map((c) => (
        <ColorSwatch key={c.id} colorOption={c} appState={appState} />
      ))}
    </div>
  );
};

const ColorSwatch = ({ colorOption, appState }) => {
  const classNames = [style.swatch];
  if (colorOption === appState.settings.colorTheme.current)
    classNames.push(style.swatchSelected);
  console.log(style);

  function select() {
    appState.settings.colorTheme.selectOption(colorOption);
  }

  return (
    <div
      className={classNames.join(" ")}
      title={colorOption.name}
      style={{ backgroundColor: colorOption.backgroundColor }}
      onClick={select}
    ></div>
  );
};

export default ColorThemePopup;