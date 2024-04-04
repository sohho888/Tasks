function debounce(fn, delay) {
  let timeID = null;

  return function (...args) {
    const context = this;
    clearTimeout(timeID);

    timeID = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

module.exports = { debounce };
