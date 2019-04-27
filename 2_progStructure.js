// print triangle to stdout
function loopingTriangle(len = 7) {
  console.log('\nLooping Triangle:');
  for (let line = '#'; line.length <= len; line += '#') {
    console.log(line)
  }
}


/*
  FizzBuzz
    - print 1...100 to stdout
    - numbers divisible by 3 (eg 6) => "Fizz"
    - numbers divisible by 5 (eg 25) => "Buzz"
    - numbers divisible by 3 AND 5 (eg 15) => "FizzBuzz"
*/
function fizzBuzz() {
  console.log('\nFizzBuzz:');
  for (let n = 1; n <= 100; n++) {
    let output = ''
    if (n % 3 == 0) output += 'Fizz'
    if (n % 5 == 0) output += 'Buzz'
    console.log(output || n)
  }
}


/*
  Chessboard
    - alternate '#' and ' ', start with space
    - parameter size determines size of board
*/
function chessboard(size = 8) {
  console.log('\nChessboard:')
  let board = ''
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if ((row + col) % 2 == 0) board += ' '
      else board += '#'
    }
    board += '\n'
  }
  console.log(board)
}

loopingTriangle()
fizzBuzz()
chessboard()