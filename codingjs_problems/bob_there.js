function bobThere(str){
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'b' && str[i + 2] === b) {
      return true
    }
  }

  return false
}

bobThere('abcbob')
