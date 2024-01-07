// Safari and other browsers in incognito mode do not have access to localStorage
const localStorageAvailable =
  "localStorage" in window && window["localStorage"] !== null;
const appStorage = {
  getItem: (key) => {
    if (localStorageAvailable) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  },
  setItem: (key, value) => {
    if (localStorageAvailable) {
      localStorage.setItem(key, value);
    }
  },
};

export default appStorage;
