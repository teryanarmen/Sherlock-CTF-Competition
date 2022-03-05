function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}
function num2bin(num, n){
    return (num >>> 0).toString(2).padStart(n, '0');
}
function bin2num(bin){
    return parseInt(bin, 2).toString(10);
}
function bin2hex(bin){
    return parseInt(bin, 2).toString(16).padStart(2, "0");
}
(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
        
    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };
    
    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };
    
    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };
    
    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };
    
    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };
    
    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };
    
    this.ConvertBase = ConvertBase;
    
})(this);




/*
* Usage example:
* ConvertBase.bin2dec('111'); // '7'
* ConvertBase.dec2hex('42'); // '2a'
* ConvertBase.hex2bin('f8'); // '11111000'
* ConvertBase.dec2bin('22'); // '10110'
*/


function main() {
    let hash = "6e 3c 5b 0f 72 2c 43 0e 6d 32 4c 0d 6f 67 17 3d 4b 15 65 34 59 15 75 35 04 21 1f";
    
    ///let hash = "5b";
    let hashArray = hash.split(" ");
     //          "53 26 78 09 41 3c 6f 09 52 2f 66 08 53 5e 1e 26 62 1f 5f 2b 79 1f 45 2b 05 34 13"
    // let soln = "53 75 d4 45 79 16 1f 4d 62 4c 5f 11 f3 95 b4 41 b3 04 95 61 33 83 d9 1a";
    var lastSoln = "";
    var soln = "";
    var i = 0;
    hash.split(" ").forEach(str => {
        
        console.log(i);
        for (let k = 1; k < 5; k++) {
            if (k == 1) {
                var bits = hex2bin(str);
                
            } else {
                var bits = bitSoln;
            }
            var bitSoln = "";
            bitSoln += (bits.slice(0,k));
            // console.log(bitSoln);
            for (let j = k; j < 8; j += k) {
                if (j+k > 8) {
                    console.log(bitSoln);
                    console.log(bits);
                    console.log(((bits.slice(j, j+k)).toString()).padEnd(3, "0"));
                    console.log(bitSoln.slice(j-k, j));
                    console.log(num2bin(bin2num((bits.slice(j, j+k)).padEnd(3, "0")) ^ bin2num(bitSoln.slice(j-k, j)), k));
                    bitSoln += num2bin(bin2num((bits.slice(j, j+k)).padEnd(3, "0")) ^ bin2num(bitSoln.slice(j-k, j)), k);
                    console.log(bitSoln.slice(0,8));
                } else {
                    bitSoln += num2bin(bin2num((bits.slice(j, j+k))) ^ bin2num(bitSoln.slice(j-k, j)), k);
                }
                
                // bitSoln += num2bin(bin2num((bits.slice(j, j+k))).padStart(1, "0") ^ bin2num(bitSoln.slice(j-k, j)), k);
                
            }
            if (k == 3) {
                bitSoln = bitSoln.slice(0,8);
            }
        }
        if (i > 0) {

            bitSoln = num2bin(bin2num(bitSoln) ^ bin2num(hex2bin(hashArray[i-1])), 8);
            soln += bin2hex(bitSoln);
        } else {
            soln += bin2hex(bitSoln);
        }
        i++;
    })
    console.log(soln);
}

main();
