let i = 0;
function increment() {
  console.log(i++);
}


function debounce(fn, delay) {
  let timeID = null;

  return function (...args) {
    clearTimeout(timeID);

    timeID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const updateDebouce = debounce(increment, 1000);

updateDebouce()