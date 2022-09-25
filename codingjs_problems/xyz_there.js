function xyzThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x' && str[i-1] !== '.') {
      let yz = str[i+1] + str[i+2]

      if (yz === 'yz') {
        return true
      }
    }
  }

  return false;
}

xyzThere('abcxyzxyz');
