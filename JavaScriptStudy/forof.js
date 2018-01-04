/**
 * 指导说明：
编写符合以下条件的 for...of 循环：

循环访问 days 数组中的每一天
将一天的首字母大写
将这一天输出到控制台中
代码应该将以下每天输出到控制台中：

Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
for (let day of days) {
    day = day[0].toUpperCase() + day.slice(1);
    console.log(day);
}
