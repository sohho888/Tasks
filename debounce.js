function debounce(fn, delay) {
  let timeID = null;

  return function (...args) {
    clearTimeout(timeID);

    timeID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

module.exports = { debounce };
