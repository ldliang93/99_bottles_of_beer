// Implementation of 99 Bottles of Beer ( http://www.99-bottles-of-beer.net/language-javascript-1948.html )
NBottlesOfBeer = function() {
  var line1 = "# bottles of beer on the wall, # bottles of beer.";
  var line2 = "Take one down and pass it around, # bottles of beer on the wall.";
  var lineLast = "Go to the store and buy some more, # bottles of beer on the wall.";

  this.sing = function(n) {
    n = parseInt(n);
    var oN = n;
    while (n >= 0) {
      print(replace(line1, n));
      if (n) {
        n--;
        print(replace(line2, n));
      } else {
        print(replace(lineLast, oN));
        print("");
        break;
      }
    }
  }

  return this;

  function replace(line, num) {
    if (num === 1) line = line.replace(/bottles/g, "bottle");
    if (num === 0) num = "no more";
    line = line.replace(/#/g, num);
    return line.substring(0, 1).toUpperCase() + line.substring(1, line.length);
  }

  function print(line) {
    /*if (document) {
      var p = document.createElement("p");
      var target = document.getElementsByTagName("div")[0];
      p.appendChild(document.createTextNode(line));
      document.body.insertBefore(p, target);
    } else {
      console.log(line + "\r\n");
    }*/
    return line+ "\r\n";
  }
}

let obj = new NBottlesOfBeer();
module.exports = obj.sing(input);
