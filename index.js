'use script';

/**
 * Removes trailing indentation at the start of multiple lines
 *
 * @param {string} x the multiline string
 * @param {integer} leadingSpaces the number of spaces you would like to keep before each line
 * @returns {string} the new multiline string
 */
export default function (x, leadingSpaces=0) {
  // Break up by new lines
  let lines = x.split('\n');

  // Remove all blank lines
  lines = lines.filter((line) => line.trim() !== '');

  // Find how many leading spaces are in the first line
  let spacesToRemove = lines[0].length - lines[0].trim().length - leadingSpaces;

  // Remove that many leading spaces from the beginning of each string
  for(let x = 0; x < lines.length; x++) {
    // TODO - Make this less noobish
    // Remove each space
    for(let y = 0; y < spacesToRemove; y++) {
      lines[x] = lines[x].replace(' ', '');
    }
  }

  // Put back into string on seperate lines
  x = lines.join('\r\n');
  return x;
}
