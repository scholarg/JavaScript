function laugh(num) {
    var res = "";
    for (var x = 1; x <= num; x++) {
        res = res + "ha";
    }
    return res + "!";
}

console.log(laugh(3));



// 说明：
// 调用 emotions() 函数，使其输出下面显示的结果，但是传入内嵌函数表达式，而不是将 laugh() 函数当做参数传入。
//
// emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
// 输出："I am happy, haha!"

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", l);
