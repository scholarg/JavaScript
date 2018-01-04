// 在答案中使用以下变量：
//
// balance - 账户余额
// isActive - 账户是否为有效状态
// checkBalance - 是否想要查看余额
// 提示： 变量 balance 可以小于、大于或等于 0。变量 isActive 和 checkBalance 是布尔值，可以设为 true 或 false。
//
// 提示：要输出账户余额（带小数点，例如 325.00），使用 .toFixed() 方法并传入要使用的小数点位数，例如 balance.toFixed(2) 返回 325.00。
// 提示：确保使用不同的值测试你的代码。例如，
//
// 如果 checkBalance 等于 true 并且 isActive 等于 false，那么应该向控制台中输出 Your account is no longer active.。

var balance = 22;
var isActive = false;
var checkBalance = false;

if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active!");
} else if (checkBalance === true && isActive === true) {
    if (balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (balance === 0) {
        console.log("Your account is empty!");
    } else if (balance < 0) {
        console.log("Your balance is negative! Please contact bank!");
    }
} else {
    console.log("Thank you! Have a nice day!");
}

// var balance = 325.00;
// var checkBalance = true;
// var isActive = false;
//
// // your code goes here
// if(checkBalance) {
//     if(isActive && balance > 0) {
//         console.log("Your balance is $" + balance.toFixed(2) + ".");
//     } else if(!isActive) {
//         console.log("Your account is no longer active.");
//     } else if (balance === 0) {
//         console.log("Your account is empty.");
//     } else {
//         console.log("Your balance is negative. Please contact bank.");
//     }
// } else {
//     console.log("Thank you. Have a nice day!");
// }
