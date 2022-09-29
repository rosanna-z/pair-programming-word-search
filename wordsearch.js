// Word Search - looks into the word search to find the given word

const wordSearch = (letters, word) => {
// if word search are empty arrays
  if (letters === []) {
    return false;
  }

  // checks for the word horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
    }
// pushes the vertical letters into a new array, joins it, checks it 
  for (let row = 0; row < horizontalJoin.length; row++) {
    let array = [];
    for (let col = 0; col < horizontalJoin[row].length; col++) {
      array.push(horizontalJoin[col][row])
        } 
        let newArray = array.join('');
        if (newArray.includes(word)) {
          return true;
        }
      }
    return false;
  };


module.exports = wordSearch;

