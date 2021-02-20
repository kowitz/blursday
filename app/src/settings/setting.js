import { makeAutoObservable, autorun } from "mobx";

// A single setting, with multiple options.
class Setting {
  storageKey; // Key for storing the selection in localStore
  options; // Array of all available options for this setting
  current; // Current selected option

  constructor(storageKey, options) {
    this.storageKey = storageKey;
    this.options = options;
    this.current = options.find((o) => o.isDefault === true);
    this.hydrate();
    if (this.current === undefined) {
      throw new Error(`No default option found for setting: ${storageKey}`);
    }
    makeAutoObservable(this);
    // TODO: set overrides for hydrate and persist
    this.persist();
  }

  selectOption(option) {
    console.log(`Setting ${this.storageKey} to ${option.id}`);
    this.current = option;
  }

  hydrate() {
    const selectedId = localStorage.getItem(this.storageKey);
    if (selectedId === null) return;
    const current = this.options.find((o) => o.id === selectedId);
    if (current === undefined) {
      console.error(
        `Setting for "${this.storageKey}" was set to "${selectedId}", but that option cannot be found.`
      );
      return;
    } else {
      this.current = current;
    }
  }

  persist() {
    autorun(() => {
      if (typeof this.current.id !== "string") {
        console.error(
          `Setting option for "${this.storageKey}" had id type that was not a string: ${this.current.id}`
        );
        return;
      }
      console.log(`Saving ${this.storageKey} = ${this.current.id}`);
      localStorage.setItem(this.storageKey, this.current.id);
    });
  }
}

export default Setting;
