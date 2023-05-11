type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x: number) => x;
  }

  return functions.reduce((f1, f2) => (x: number) => f1(f2(x)));
}
