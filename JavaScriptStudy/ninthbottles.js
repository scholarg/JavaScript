/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

//  "99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!"
// "98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!"
// ...
// "2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!"
// "1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!"

var num = 99;

while (num >= 1) {
    t = num - 1;
    bottle = (num === 1) ? "bottle" : "bottles";
    bottle1 = (t === 1) ? "bottle" : "bottles";
    console.log('"' + num + " "+ bottle + " of juice on the wall! " + num + " "+ bottle + " of juice! Take one down, pass it around... " + t + " " + bottle1 + " of juice on the wall!" + '"');
    num = num - 1;
}
