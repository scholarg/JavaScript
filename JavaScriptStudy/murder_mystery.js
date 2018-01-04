// 我们还知道每件武器对应一个房间，所以...
//
// 毒药(poison)属于宴会厅(ballroom)，
// 奖杯(trophy)属于书房(gallery)，
// 台球杆(pool stick)属于台球房(billiards room)，
// 刀(knife)属于餐厅(dining room)。
// 我们知道谋杀发生时，每名嫌疑人都位于特定的房间内。
//
// Parkes 先生位于餐厅。
// Van Cleve 女士位于书房。
// Sparr 女士位于台球房。
// Kalehoff 先生位于宴会厅。
// 为了解决这一迷案，请写一组满足以下要求的条件语句：
//
// 根据 room 设置 weapon 的值
// 如果 room 的值与嫌疑人的房间一样，则将 solved 的值设为 true
// 接着，如果迷案解决了，将以下内容输出到控制台中：
//
// __________ did it in the __________ with the __________!
// 在空白处填上嫌疑犯的名字、房间和武器。例如，
//
// Mr. Parkes did it in the dining room with the knife!

var room = "billiards room";
var suspect = "Mrs. Sparr";

var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
    if (suspect == "Mrs. Parkes") {
        solved = true;
    }
} else if (room ==="gallery") {
    weapon = "trophy";
    if (suspect == "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect == "Mrs. Sparr") {
        solved = true;
    }
} else if (room === "dining room"){
    weapon = "knife";
    if (suspect == "Mr. Kalehoff") {
        solved = true;
    }
}

if (solved) {
 console.log(suspect + " did it in the " + room + " with the " + weapon+ "!"/* your message goes here*/);
}
