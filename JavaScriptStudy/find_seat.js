/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for (var line = 0; line <= 25; line++) {
    for (var n = 0; n <= 99; n++) {
        console.log(line + "-" + n + " // " + "行 " + line + ", " + "座位 " + n);
    }
}
