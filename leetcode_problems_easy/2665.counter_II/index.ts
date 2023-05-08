type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let current = init;

  let reset = () => {
    current = init;
    return current;
  };
  let increment = () => {
    current++;
    return current;
  };
  let decrement = () => {
    current--;
    return current;
  };

  return {
    reset,
    increment,
    decrement,
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
