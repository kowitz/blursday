import Popup from "reactjs-popup";
import { observer } from "mobx-react-lite";

import style from "./ProgressBar.module.css";

const ProgressBar = observer(({ appState }) => {
  let percentComplete = percentYearComplete();
  if (appState.progressPeriod === "month")
    percentComplete = percentMonthComplete();

  const barPercentage = `${Math.floor(percentComplete * 100)}%`;

  const progressBar = (
    <div className={style.progressBar}>
      <div
        className={style.progressBarInner}
        style={{ width: barPercentage }}
      />
    </div>
  );

  const progressBarPopup = (
    <div>
      <ProgressPeriodMenuItem id="year" label="Year" appState={appState} />
      <ProgressPeriodMenuItem id="month" label="Month" appState={appState} />
      <ProgressPeriodMenuItem id="week" label="Week" appState={appState} />
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
    <div style={style.menuItem} onClick={onSelect}>
      {checked ? "(x)" : "( )"}
      {label}
    </div>
  );
}

// Time utilities

function percentYearComplete() {
  var now = new Date();
  var yearStart = new Date(now.getFullYear(), 0, 0);
  return (now - yearStart) / (1000 * 60 * 60 * 24 * 365);
}

function percentMonthComplete() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthStart = new Date(year, month, 0);
  const monthEnd = new Date(year, month + 1, 0);
  return (date - monthStart) / (monthEnd - monthStart);
}

export default ProgressBar;
