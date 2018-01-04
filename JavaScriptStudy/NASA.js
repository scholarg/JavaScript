// NASA 发射倒计时检查清单，帮助 NASA 工程人员完成特定的技术任务。在最后一分钟，NASA 需要完成以下 6 项任务：
//
// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// 说明：
// 写一个 while 循环，从 60 秒开始倒计时：
//
// 如果有正在执行的任务，则输出该任务（英文而不是翻译）
// 如果当前未执行任何任务，则输出 T-x seconds
// 使用上述任务和时间说明。


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var T = 60;
var x = 0;
while (T - x >= 0) {
    if (T - x === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if (T - x === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (T - x === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (T - x === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (T - x === 6) {
        console.log("Main engine start");
    }
    else if (T - x === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else {
        second = (T - x === 1) ? "second" : "seconds";
        console.log("T" + "-" + (T - x) + " " + second);
    }
    x = x + 1
}
