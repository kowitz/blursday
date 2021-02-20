import Popup from "reactjs-popup";
import { observer } from "mobx-react-lite";
import { MdCheck } from "react-icons/md";

import style from "./ProgressBar.module.css";

const ProgressBar = observer(({ appState }) => {
  let percentComplete = percentYearComplete();
  if (appState.progressPeriod === "month")
    percentComplete = percentMonthComplete();

  const barPercentage = `${Math.floor(percentComplete * 100)}%`;

  const progressBar = (
    <div className={style.outerBar}>
      <div
        className={`colorThemeForegroundFill ${style.innerBar}`}
        style={{ width: barPercentage }}
      />
    </div>
  );

  const progressBarPopup = (
    <div className={style.progressBarPopup}>
      <ProgressPeriodMenuItem id="year" label="This Year" appState={appState} />
      <ProgressPeriodMenuItem
        id="month"
        label="This Month"
        appState={appState}
      />
    </div>
  );

  return (
    <Popup trigger={progressBar} position="top center" offsetY={8}>
      {progressBarPopup}
    </Popup>
  );
});

const ProgressPeriodMenuItem = observer(({ id, label, appState }) => {
  return (
    <MenuItem
      checked={appState.progressPeriod === id}
      label={label}
      onSelect={() => appState.setProgressPeriod(id)}
    />
  );
});

function MenuItem({ checked, label, onSelect }) {
  return (
    <div className={style.menuItem} onClick={onSelect}>
      <div className={style.menuItemIcon}>{checked ? <MdCheck /> : null}</div>
      <div className={style.menuItemLabel}>{label}</div>
    </div>
  );
}

// Time utilities

function percentYearComplete() {
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 0);
  return (now - yearStart) / (1000 * 60 * 60 * 24 * 365);
}

function percentMonthComplete() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const start = new Date(year, month, 0);
  const end = new Date(year, month + 1, 0);
  return (now - start) / (end - start);
}

export default ProgressBar;
