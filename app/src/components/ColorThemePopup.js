import style from "./ColorThemePopup.module.css";

const COLOR_THEMES = [
  { id: "default", name: "Default" },
  { id: "blackAndWhite", name: "Black & White" },
];

const ColorThemePopup = ({ appState }) => {
  return (
    <div className={style.popup}>
      {COLOR_THEMES.map((c) => (
        <ColorSwatch id={c.id} key={c.id} name={c.name} appState={appState} />
      ))}
    </div>
  );
};

const ColorSwatch = ({ id, name, appState }) => {
  const swatchStyle = [
    style.swatch,
    `colorTheme--${id}`,
    "colorThemeBackgroundFill",
  ].join(" ");

  return <div className={swatchStyle} title={name}></div>;
};

export default ColorThemePopup;
