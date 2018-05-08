NBottlesOfBeer = function() {
  var line1 = "# bottles of beer on the wall, # bottles of beer.";
  var line2 = "Take one down and pass it around, # bottles of beer on the wall.";
  var lineLast = "Go to the store and buy some more, # bottles of beer on the wall.";

  this.sing = function(n) {
    n = parseInt(n);
    var oN = n;
    var res = "\n";
    while (n >= 0) {
      res +=  print(replace(line1, n));
      if (n) {
        n--;
        res += print(replace(line2, n));
      } else {
        res += print(replace(lineLast, oN));
        break;
      }
    }
    return res;
  }

  function replace(line, num) {
    if (num === 1) line = line.replace(/bottles/g, "bottle");
    if (num === 0) num = "no more";
    line = line.replace(/#/g, num);
    return line.substring(0, 1).toUpperCase() + line.substring(1, line.length);
  }

  function print(line) {
    var lyc = "    "+line+ "\r\n";
    return lyc;
  }
}

let obj = new NBottlesOfBeer();
module.exports = obj.sing;
