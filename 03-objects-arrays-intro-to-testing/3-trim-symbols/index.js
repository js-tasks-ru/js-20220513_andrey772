/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let identicalSymbolsArray = [];
  let prevChar = '';
  let j = -1;
  // xxxaaaaab -> ["xxx", "aaaaa", "b"]
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (prevChar === char) {
      identicalSymbolsArray[j] += char;
    } else {
      identicalSymbolsArray[++j] = char;
    }
    prevChar = char;
  }
  // ["xxx", "aaaaa", "b"] -> 'xxaab'
  return identicalSymbolsArray.map((identicals) => identicals.slice(0, size)).join('');
}
