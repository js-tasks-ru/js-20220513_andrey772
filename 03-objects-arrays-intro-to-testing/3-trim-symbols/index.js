/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let currentSymbol;
  let groupedSymbols = [];

  for (let symbol of [...string]) {
    if (symbol !== currentSymbol) {
      groupedSymbols.push('');
      currentSymbol = symbol;
    }
    groupedSymbols[groupedSymbols.length - 1] += symbol;
  }
  // ["xxx", "aaaaa", "b"] -> 'xxaab'
  return groupedSymbols.map((identicals) => identicals.slice(0, size)).join('');
}
