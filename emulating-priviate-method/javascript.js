const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(`first counter.value(): ${counter.value()}`); // 0.

counter.increment();
counter.increment();
console.log(`second counter.value(): ${counter.value()}`); // 2.

counter.decrement();
console.log(`third counter.value(): ${counter.value()}`); // 1.


const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(`first counter1.value(): ${counter1.value()}`); // 0.

counter1.increment();
counter1.increment();
console.log(`second counter1.value(): ${counter1.value()}`); // 2.

counter1.decrement();
console.log(`third counter1.value(): ${counter1.value()}`); // 1.
console.log(`first counter2.value(): ${counter2.value()}`); // 0.
