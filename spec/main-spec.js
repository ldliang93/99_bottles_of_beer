const sing = require('../main/main');
var fs = require('fs');

describe('99_bottles_of_beer', function () {
  it('should return lyrics.md when input 99', function() {
    let input = 99;
    var data = fs.readFileSync('lyrics.md', 'utf-8');
    let summary = sing(input);
    //console.log(summary);
    expect(summary).toEqual(data);
  });
});
