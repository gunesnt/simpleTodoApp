export default {
  load(key, defaultValue) {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : defaultValue;
  },

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
