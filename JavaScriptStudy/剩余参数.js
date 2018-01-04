/**
 * 指导说明：
使用剩余参数创建一个 average() 函数，该函数会计算不定数量的数字的平均值。

提示：确保使用不同的值测试代码。例如，

average(2, 6) 应该返回 4
average(2, 3, 3, 5, 7, 10) 应该返回 5
average(7, 1432, 12, 13, 100) 应该返回 312.8
average() 应该返回 0
 */

function average(...nums) {
    if (nums.length == 0) {
        return 0
    };
    let sum = 0;
    for (let num of nums) {
        sum += num;
     }
    return sum / nums.length
 }

 console.log(average(2, 6));
 console.log(average(2, 3, 3, 5, 7, 10));
 console.log(average(7, 1432, 12, 13, 100));
 console.log(average());
