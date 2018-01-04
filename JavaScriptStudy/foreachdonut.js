// 下面是个 donut 对象数组
//
// var donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 }
// ];
// 说明：
// 使用 forEach() 方法循环访问该数组，并使用 console.log 输出以下甜甜圈摘要
//
// Jelly donuts cost $1.22 each
// Chocolate donuts cost $2.45 each
// Cider donuts cost $1.59 each
// Boston Cream donuts cost $5.99 each



var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
    console.log(donut.type + " donuts cost " + "$" + donut.cost + " each");
})
