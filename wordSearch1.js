let puzzle1 = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
];

function searchSnakingInclude(word, puzzle){
  let arr = []
  let arr1 = word.split()
  let count = 0;

  for (let i = 0; i<puzzle.length; i++) {
      for (let j = 0; j<puzzle[i].length; j++) {
        if (puzzle[i][j] == word[count]) {
          count++
          arr.push(puzzle[i][j])
        } 
        else if (puzzle[i+1][j+1] == word[count]) {
          count++
          arr.push(puzzle[i+1][j+1])
        }
        else if (puzzle[i+1][j] == word[count]) {
          count++
          puzzle[i+1][j]
        }
        else if (puzzle[i+1][j-1] == word[count]) {
          count++
          arr.push(puzzle[i+1][j-1])
        }
        else if (puzzle[i][j+1] == word[count]) {
          count++
          arr.push(puzzle[i][j+1])
        }
        else if (puzzle[i][j-1] == word[count]) {
          count++
          arr.push(puzzle[i][j-1])
        } 
// Тут ошибка
//  else if (puzzle[i-1][j] == word[count]) {
//   count++
//   arr.push(puzzle[i-1][j])
// }
// else if (puzzle[i-1][j+1] == word[count]) {
//   count++
//   arr.push(puzzle[i-1][j+1])
// } 
        else {
          return false
        }
      }
}
if (arr==arr1) {
  return true
}
}
 console.log(searchSnakingInclude("w", puzzle1));
