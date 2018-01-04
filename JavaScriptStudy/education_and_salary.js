// 2015 年，美国劳工统计局开展了一项研究，旨在调查平均工资与教育程度的直接联系程度。他们发现：
//
// 没有高中学历的人平均收入 25,636 美元/年，
// 具有高中学历的人平均收入 35,256 美元/年，
// 具有副学士学位的人平均收入 41,496 美元/年，
// 具有本科学位的人平均收入 59,124 美元/年，
// 具有硕士学位的人平均收入 69,732 美元/年，
// 具有职业学位的人平均收入 89,960 美元/年，
// 以及具有博士学位的人平均收入 84,396 美元/年。
// 注意：具有优达学城纳米学位的人平均工资是多少呢？这个问题比较难回答，但是这并不表示我们没有努力计算纳米学位的价值。点击此处通过优达学城常驻作者 Chris Watkins 的文章详细了解我们的纳米学位。
// 说明：
// 写一个 switch 语句，根据学历情况设置平均 salary。
//
// 然后向控制台输出以下内容。
//
// In 2015, a person with __________ earned an average of __________/year.
// 在空白处填上教育类型和预计的平均工资。确保在输出语句中使用正确的语法。要获取帮助，请参考上述调查结果。
//
// In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
// 提示：要使输出的平均工资中出现逗号（例如 59,124），请使用 toLocaleString() 方法并向其传入 "en-US"。例如 salary.toLocaleString("en-US")。
// 提示：确保使用不同的值测试你的代码。例如，
//
// 如果 education 等于 "an Associate's degree"，那么应该向控制台输出 In 2015, a person with an Associate's degree earned an average of $41,496/year.

var salary;
var education = "no high school diploma"

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school's degree":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional's degree":
        salary = 89960;
        break;
    case "a Doctor's degree":
        salary = 84396;
        break;
}
console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary.toLocaleString("en-US") +"/year.");
