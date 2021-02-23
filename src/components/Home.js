import { MdPalette, MdMoreHoriz, MdChat } from "react-icons/md";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import Popup from "reactjs-popup";

import ProgressBar from "./ProgressBar.js";
import ColorThemePopup from "./ColorThemePopup.js";
import { Menu, MenuItem } from "./Menu.js";

import style from "./Home.module.css";

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/blursday/eddicpleilcpgaeclclneidpnjfiiebm";

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
      <Promo appState={appState} />
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

const Promo = ({ appState }) => {
  if (appState.context.isEmbeded) return null;
  const actionColor = appState.settings.colorTheme.current.actionColor;

  let chromeOnlyNotice = appState.context.isChromeExtensionCapable ? null : (
    <div className={style.promoNotice}>
      This extension only works in Chrome right now.
    </div>
  );

  return (
    <div className={style.promo}>
      <h1>Can't remember the day of week anymore?</h1>
      <p>Get Blursday to see this page each time you open a new browser tab.</p>
      {chromeOnlyNotice}
      <a
        href={CHROME_STORE_URL}
        className={style.button}
        style={{ outlineColor: actionColor, color: actionColor }}
      >
        Add to Chrome
      </a>
    </div>
  );
};

const Footer = ({ appState }) => {
  const colorFooterIcon = (
    <button className={style.footerIconItem}>
      <MdPalette />
    </button>
  );

  const moreFooterIcon = (
    <button className={style.footerIconItem}>
      <MdMoreHoriz />
    </button>
  );

  return (
    <div className={style.footer}>
      <Popup trigger={colorFooterIcon} position="top left" offsetY={8}>
        <ColorThemePopup appState={appState} />
      </Popup>
      <div className={style.progress}>
        <ProgressBar appState={appState} />
      </div>
      <Popup trigger={moreFooterIcon} position="top right" offsetY={8}>
        <MorePopup />
      </Popup>
    </div>
  );
};

const MorePopup = () => {
  const shareText = encodeURIComponent(
    "Can't remember what day of week it is?\nTry Blursday.app"
  );
  return (
    <Menu>
      <MenuItem
        icon={<IoLogoTwitter />}
        label="Tweet"
        href={`https://twitter.com/intent/tweet?text=${shareText}`}
      />
      <MenuItem
        icon={<MdChat />}
        label="Send feedback"
        href="mailto:hello@blursday.app"
      />
      <MenuItem
        icon={<IoLogoGithub />}
        label="Open Source"
        href="https://github.com/kowitz/blursday"
      />
    </Menu>
  );
};

export default Home;
