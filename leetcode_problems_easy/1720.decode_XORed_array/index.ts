function decode(encoded: number[], first: number): number[] {
  let result: number[] = [first];

  for (let i = 0; i < encoded.length; i++) {
    result[i + 1] = encoded[i] ^ result[i];
  }

  return result;
}
