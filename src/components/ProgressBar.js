import Popup from "reactjs-popup";
import { observer } from "mobx-react-lite";

import { MenuItem, MenuSeparator, MenuTitle } from "./Menu.js";

import style from "./ProgressBar.module.css";

const ProgressBar = observer(({ appState }) => {
  const percentComplete =
    appState.settings.progressPeriod.current.percentComplete;
  const barPercentage = `${Math.floor(percentComplete * 100)}%`;

  let outerBarClasses = [style.outerBar];
  if (appState.settings.colorTheme.current.shadeMode === "light") {
    outerBarClasses.push(style.outerBarLight);
  }

  const progressBar = (
    <div
      className={outerBarClasses.join(" ")}
      style={{
        backgroundColor: appState.settings.colorTheme.current.shadeColor,
      }}
    >
      <div
        className={style.innerBar}
        style={{
          width: barPercentage,
          backgroundColor: appState.settings.colorTheme.current.foregroundColor,
        }}
      />
    </div>
  );

  const progressBarPopup = (
    <div className={style.progressBarPopup}>
      <MenuTitle label={`${barPercentage} percent complete`} />
      <MenuSeparator />
      {appState.settings.progressPeriod.options.map((o) => (
        <ProgressPeriodMenuItem key={o.id} appState={appState} option={o} />
      ))}
    </div>
  );

  return (
    <Popup trigger={progressBar} position="top center" offsetY={8}>
      {progressBarPopup}
    </Popup>
  );
});

const ProgressPeriodMenuItem = observer(({ option, appState }) => {
  return (
    <MenuItem
      checked={appState.settings.progressPeriod.current === option}
      label={option.name}
      onSelect={() => appState.settings.progressPeriod.selectOption(option)}
    />
  );
});

export default ProgressBar;
