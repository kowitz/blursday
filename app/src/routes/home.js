import { observer } from "mobx-react-lite";

import style from "./home.module.css";

const DAYS_OF_WEEK = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const Home = observer(({ appState }) => {
  const today = DAYS_OF_WEEK[new Date().getDay()];
  return (
    <div className={style.layout}>
      <div className={style.header}>Header</div>
      <div className={style.day} style={{ color: appState.color }}>
        {today}
      </div>
      <div className={style.footer}>
        <button onClick={() => appState.navigate("SETTINGS")}>Settings</button>
      </div>
    </div>
  );
});

export default Home;
