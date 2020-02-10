//Exercise number 13

var fs = require("fs");

var data = fs.readFileSync('file.txt').toString();

var charsBin = [];
function textToBin(text) {
  var length = text.length,
      output = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
    charsBin.push(Array(8-bin.length+1).join("0") + bin + "--" + text[i]);
  }
  return output.join(" ");
}


var coded = textToBin(data);
charsBin.forEach(function(entry) {
  console.log(entry);
});

console.log(coded);

function binaryToString(str) {
    // Removes the spaces from the binary string
    str = str.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    str = str.match(/.{1,8}/g).join(" ");

    var newBinary = str.split(" ");
    var binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    
    return binaryCode.join("");
}

var decoded = binaryToString(coded);
console.log(decoded);
