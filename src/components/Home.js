import { MdPalette, MdSettings } from "react-icons/md";
import Popup from "reactjs-popup";

import style from "./Home.module.css";

import ProgressBar from "./ProgressBar.js";
import ColorThemePopup from "./ColorThemePopup.js";

const DAYS_OF_WEEK = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const Home = ({ appState }) => {
  const today = DAYS_OF_WEEK[new Date().getDay()];
  return (
    <div className={style.layout}>
      <div
        className={style.day}
        style={{ color: appState.settings.colorTheme.current.foregroundColor }}
      >
        <div className={style.dayText}>{today}</div>
      </div>
      <Footer appState={appState} />
    </div>
  );
};

const Footer = ({ appState }) => {
  const colorFooterIcon = (
    <div className={style.footerIconItem}>
      <MdPalette />
    </div>
  );

  return (
    <div className={style.footer}>
      <Popup trigger={colorFooterIcon} position="top left" offsetY={8}>
        <ColorThemePopup appState={appState} />
      </Popup>
      <div className={style.progress}>
        <ProgressBar appState={appState} />
      </div>
      <div className={style.footerIconItem}>
        <MdSettings />
      </div>
    </div>
  );
};

export default Home;
