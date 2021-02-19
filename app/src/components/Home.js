import style from "./Home.module.css";

import ProgressBar from "./ProgressBar.js";

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
      <div className={style.day} style={{ color: appState.color }}>
        <div className={style.dayText}>{today}</div>
      </div>
      <Footer appState={appState} />
    </div>
  );
};

const Footer = ({ appState }) => {
  return (
    <div className={style.footer}>
      <div>TODO: Color</div>
      <div className={style.progress}>
        <ProgressBar appState={appState} />
      </div>
      <div>
        <button onClick={() => appState.navigate("SETTINGS")}>Settings</button>
      </div>
    </div>
  );
};

export default Home;
