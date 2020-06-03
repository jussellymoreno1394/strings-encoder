"use strict";
/**
 * @author Jusselly Moreno
 * - 0: Encode to BASE64.
 * - 1: Encode to ROT13.
 * - 2: Encode to HEXADECIMAL.
 * - 3: Encode to BINARY.
 */

const readline = require("readline-sync");

var opt;
var str;

/**
 * String to Base64 converter.
 * @param {string} string - String to encode.
 * @returns {string} encoded - Encoded string to Base64.
 */
function stringToBase64(string) {
  let encoded = Buffer.from(string).toString("base64");
  return encoded;
}

/**
 * String to Rot13 converter.
 * @param {string} string - String to encode.
 * @returns {string} encoded - Encoded string to Rot13.
 */
function stringToRot13(string) {
  let encoded = [];

  for (let i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97) ||
      string.charCodeAt(i) < 65 ||
      string.charCodeAt(i) > 122
    ) {
      encoded.push(string.charAt(i));
    } else if (
      string.charCodeAt(i) > 109 ||
      (string.charCodeAt(i) > 77 && string.charCodeAt(i) <= 90)
    ) {
      encoded.push(String.fromCharCode(string.charCodeAt(i) - 13));
    } else {
      encoded.push(String.fromCharCode(string.charCodeAt(i) + 13));
    }
  }
  return encoded;
}

/**
 * String to Hexadecimal converter.
 * @param {string} string - String to encode.
 * @returns {string} encoded - Encoded string to Hexadecimal.
 */
function stringToHexadecimal(string) {
  let encoded = Buffer.from(string).toString("hex");
  return encoded;
}

/**
 * String to Binary converter.
 * @param {string} string - String to encode.
 * @returns {string} encoded - Encoded string to Binary.
 */
function stringToBinary(string) {
  let encoded = " ";

  for (let i = 0; i < string.length; i++) {
    encoded += string[i].charCodeAt(0).toString(2) + " ";
  }
  return encoded;
}

/**
 * String encoding options.
 * @param {number} option Encoding option.
 * @param {string} string String to encode.
 * @returns {string} encodedString - encoding result.
 */
function stringEncoderOpt(option, string) {
  let encodedString = " ";

  switch (option) {
    case 0:
      encodedString = stringToBase64(string);
      break;
    case 1:
      encodedString = stringToRot13(string);
      break;
    case 2:
      encodedString = stringToHexadecimal(string);
      break;
    case 3:
      encodedString = stringToBinary(string);
      break;
  }
  return encodedString;
}

do {
  opt = parseInt(
    readline.question(
      "Encoding options: \n 0 = Encode to Base64 " +
        "\n 1 = Encode to ROT13\n 2 = Encode to Hexadecimal\n 3 = Encode to Binary. \n "
    )
  );
  if (opt < 0 || opt > 3 || isNaN(opt)) {
    console.log("Non existen option. Try again.");
  }
} while (opt < 0 || opt > 3 || isNaN(opt));

do {
  str = readline.question("String to encode: \n");
  if (str.length < 1) {
    console.log("You must enter at least one character to encode. Try again.");
  }
} while (str.length < 1);

console.log("Encoded result:\n" + stringEncoderOpt(opt, str));

module.exports = stringEncoderOpt();
