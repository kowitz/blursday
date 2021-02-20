import { extendObservable } from "mobx";

import Setting from "./setting.js";

const PROGRESS_PERIOD = [
  {
    isDefault: true,
    id: "year",
    name: "This Year",
  },
  {
    id: "month",
    name: "This Month",
  },
];

class ProgresPeriod {
  constructor({ id, isDefault, name }) {
    extendObservable(this, { id, isDefault, name });
  }

  get percentComplete() {
    if (this.id === "year") return percentYearComplete();
    if (this.id === "month") return percentMonthComplete();
    console.error(
      `progressPeriod: Can't calulate percent complete for "${this.id}"`
    );
    return undefined;
  }
}

export default new Setting(
  "progressPeriod",
  PROGRESS_PERIOD.map((t) => new ProgresPeriod(t))
);

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
