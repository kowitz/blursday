import { extendObservable } from "mobx";

import Setting from "./setting.js";

const SHADE_MODE = {
  LIGHT: "light",
  DARK: "dark",
};

const COLOR_THEMES = [
  {
    isDefault: true,
    id: "ice",
    name: "Ice",
    backgroundColor: "#efefef",
    foregroundColor: "#333",
  },
  {
    id: "blueAndYellow",
    name: "Cheerful Ikea",
    backgroundColor: "#00bfd8",
    foregroundColor: "#ffea00",
  },
  {
    id: "teal",
    name: "Teal",
    backgroundColor: "#74B9A4",
    foregroundColor: "#ffffff",
  },
  {
    id: "sand",
    name: "Sand",
    backgroundColor: "#AE9063",
    foregroundColor: "#E4E5A2",
  },
  {
    id: "purple-rain",
    name: "Purple Rain",
    backgroundColor: "#893691",
    foregroundColor: "#40E7DD",
  },
  {
    id: "blood-orange",
    name: "Blood Orange",
    backgroundColor: "#CC664F",
    foregroundColor: "#572828",
  },
  {
    id: "fog",
    name: "Carl the fog",
    backgroundColor: "#B4BABF",
    foregroundColor: "#D5DADE",
  },
  {
    id: "millenial-pink",
    name: "Millenial Pink",
    backgroundColor: "#E8C5C4",
    foregroundColor: "#949494",
    shadeMode: SHADE_MODE.LIGHT,
  },
];

class ColorTheme {
  shadeMode = SHADE_MODE.DARK;

  constructor({
    id,
    isDefault,
    name,
    backgroundColor,
    foregroundColor,
    shadeMode,
  }) {
    extendObservable(this, {
      id,
      isDefault,
      name,
      backgroundColor,
      foregroundColor,
      shadeMode,
    });
    // Todo, add overrides
  }
}

export default new Setting(
  "colorTheme",
  COLOR_THEMES.map((t) => new ColorTheme(t))
);
