function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let called: boolean = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }

    return undefined;
  };
}
