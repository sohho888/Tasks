//Promise.all(p1, p2, p3).then((data) => {console.log(data)});

function promiseAll(promises) {
  let results = [];
  let count = 0;
  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          count++;
          results[i] = data;

          if (promises.length === count) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
}

let p1 = Promise.resolve(3);
let p2 = 1337;
// let p5 = new Promise((resolve, reject) => {
//   // Этот промис прервёт Promise.all
//   reject('reject');
// });

console.log(promiseAll(p1, p2));
