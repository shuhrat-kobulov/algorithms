function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack: number[] = [];
  let counter: number = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length && stack[stack.length - 1] === popped[counter]) {
      stack.pop();
      counter++;
    }
  }

  return pushed.length === counter;
}
