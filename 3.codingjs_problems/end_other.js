function endOther(a, b){
  var smallWord = a.length <= b.length ? a : b;
  var longWord = a.length > b.length ? a : b;

  var lastLetters = longWord.split('').splice(-smallWord.length).join('')

  if (smallWord.toLowerCase() === lastLetters.toLowerCase()) {
    return true
  } else {
    return false
  }
}

endOther('abc', 'abXabc');
