import { observer } from "mobx-react-lite";

import style from "./home.module.css";

const Home = observer(({ appState }) => {
  return (
    <div className={style.layout}>
      <div className={style.header}>Header</div>
      <div className={style.day} style={{ color: appState.color }}>
        {appState.day}
      </div>
      <div className={style.footer}>
        <button onClick={() => appState.navigate("SETTINGS")}>Settings</button>
      </div>
    </div>
  );
});

export default Home;
