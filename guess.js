const guess = (userGuess, secret) => {
  if(userGuess < secret) {
    return 'Too small!'
  } else if (userGuess > secret) {
    return 'Too big!'
  } else if (userGuess === secret) {
    return 'You win!'
  }
}
console.log(guess(10, 10))
