'use strict';
'use script'

/**
 * Removes trailing indentation at the start of multiple lines
 *
 * @param {string} x the multiline string
 * @param {integer} leadingSpaces the number of spaces you would like to keep before each line
 * @returns {string} the new multiline string
 */
;
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  var leadingSpaces = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  // Break up by new lines
  var lines = x.split('\n');

  // Remove all blank lines
  lines = lines.filter(function (line) {
    return line.trim() !== '';
  });

  // Find how many leading spaces are in the first line
  var spacesToRemove = lines[0].length - lines[0].trim().length - leadingSpaces;

  // Remove that many leading spaces from the beginning of each string
  for (var _x2 = 0; _x2 < lines.length; _x2++) {
    // TODO - Make this less noobish
    // Remove each space
    for (var y = 0; y < spacesToRemove; y++) {
      lines[_x2] = lines[_x2].replace(' ', '');
    }
  }

  // Put back into string on seperate lines
  x = lines.join('\r\n');
  return x;
};