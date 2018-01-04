// 创建以下变量：
//
// uniqueFlavors，将其值设为空的 WeakSet 对象
// flavor1，将其设为对象 { flavor: 'chocolate' }
// flavor2，将其设为一个对象，该对象的属性为 flavor，值可以自己选择
// 使用 .add() 方法将对象 flavor1 和 flavor2 添加到 uniqueFlavors。
//
// 使用 .add() 方法再次将 flavor1 对象添加到 uniqueFlavors Set。

const uniqueFlavors = new WeakSet()
const flavor1 = { flavor: 'chocolate' }
const flavor2 = {flavor: 'orange'}

uniqueFlavors.add(flavor1)
uniqueFlavors.add(flavor2)

uniqueFlavors.add(flavor1)
