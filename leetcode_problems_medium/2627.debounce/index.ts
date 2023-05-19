type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timeoutId = null;

  return function (...args) {
    clearTimeout(timeoutId!);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}
