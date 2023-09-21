/*

A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"

If a character provided is not in the opposing alphabet, simply leave it as be.

*/

function SubstitutionCipher(abc1, abc2) {

  this.substitute = function(str, currentAbc, targetAbc) {
    var encoded = "";
    for (var i = 0; i < str.length; i++) {
      encoded += targetAbc[currentAbc.indexOf(str[i])] || str[i];
    }
    return encoded;
  }

  this.encode = function(str) {
    return this.substitute(str, abc1, abc2);
  }

  this.decode = function(str) {
    return this.substitute(str, abc2, abc1);
  }
}
