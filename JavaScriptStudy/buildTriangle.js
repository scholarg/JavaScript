function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(num) {
    var h = "";
    for (var i = 1; i <= num; i++) {
        h += makeLine(i);
    }
    return h;
}

console.log(buildTriangle(10));
