import { makeAutoObservable, autorun } from "mobx";

class AppState {
  view = "HOME";

  colorTheme = "default";
  blur = "low";

  navigate(view) {
    this.view = view;
  }

  setColorTheme(c) {
    this.colorTheme = c;
  }

  constructor() {
    let fieldsToPersist = ["colorTheme", "blur"];
    hydrate(this, fieldsToPersist);
    makeAutoObservable(this);
    persist(this, fieldsToPersist);
  }
}

function hydrate(object, fields) {
  fields.forEach((key) => {
    const val = localStorage.getItem(key);
    if (val !== null) {
      object[key] = val;
    }
  });
}

function persist(observable, fields) {
  fields.forEach((key) => {
    autorun(() => {
      console.log(`Saving ${key} = ${observable[key]}`);
      localStorage.setItem(key, observable[key]);
    });
  });
}

export default AppState;
