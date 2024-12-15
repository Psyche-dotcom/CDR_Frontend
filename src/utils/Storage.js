export default class Storage {
  static set(key, value) {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.setItem(key, String(value));
      }
    } catch (err) {
      //console.error(err)
    }
  }

  static get(key) {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        return window.sessionStorage.getItem(key) || undefined;
      }
    } catch (err) {
      return undefined;
    }
  }

  static setObject(key, value) {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      //console.error(err)
    }
  }

  static getObject(key) {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        const state = window.sessionStorage.getItem(key);
        if (state === null) {
          return undefined;
        }
        return JSON.parse(state);
      }
    } catch (err) {
      return undefined;
    }
  }
  static clear() {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.clear();
        window.localStorage.clear();
      }
    } catch (err) {
      //console.error(err)
    }
  }
  static remove(key) {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.removeItem(key);
      }
    } catch (err) {
      //console.error(err)
    }
  }
}
