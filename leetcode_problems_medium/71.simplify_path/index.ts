function simplifyPath(path: string): string {
  const splitPath = path.split('/');
  const stack: string[] = [];

  for (let i = 0; i < splitPath.length; i++) {
    const segment = splitPath[i];

    if (!segment || segment === '.') {
      continue;
    }

    if (segment === '..') {
      if (i === 0) {
        continue;
      }
      if (stack.length > 0) {
        stack.pop();
      }

      continue;
    }

    stack.push(segment);
  }

  return '/' + stack.join('/');
}
