//RLE-ALGORITHM JS, exercise no. 3
var fs = require("fs");

var data = fs.readFileSync('file.txt').toString();

var rleString = "";
function Encode(str) 
{ 
    n = str.length; 
    for (var i = 0; i < n; i++) { 
  
        // Count occurrences of current character 
        count = 1; 
        while (i < n - 1 && str[i] == str[i + 1]) { 
            count++; 
            i++; 
        }
        rleString += (count+str[i]);
    }
    return rleString;
}

function calculateRatio(num_1, num_2){
    for(num=num_2; num>1; num--) {
        if((num_1 % num) == 0 && (num_2 % num) == 0) {
            num_1=num_1/num;
            num_2=num_2/num;
        }
    }
    var ratio = num_1+"/"+num_2;
    return ratio;
}

console.log(Encode(data));
console.log(data);
console.log(rleString);
n1 = rleString.length-1;
n2 = data.length-1;
console.log("The ratio is = ", calculateRatio(n1, n2), " = ", n1/n2);
