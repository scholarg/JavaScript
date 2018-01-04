// 从最小的生物到最大型的动物，不可避免地每个会呼吸的生物都需要获取其他有机物才能生存。意味着所有动物都属于以下三大类型中的某种类型（根据摄入的食物分类）：
//
// 只吃植物的动物叫做食草动物
// 只吃其他动物的动物叫做食肉动物
// 同时吃植物和动物的动物叫做杂食动物
// 说明：
// 写一系列的三元语句，将变量 category 设为等于：
//
// "herbivore"（如果某个动物吃植物）
// "carnivore"（如果某个动物吃动物）
// "omnivore"（如果某个动物吃植物和动物）
// undefined（如果某个动物不吃植物或动物）
// 使用 eatsPlants 和 eatsAnimals 变量测试代码。
//
// 提示：确保使用不同的值测试你的代码。例如，
//
// 如果 eatsPlants 等于 true，eatsAnimals 等于 false，那么应该向控制台输出 herbivore。

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code

var eatsPlants = false;
var eatsAnimals = true;
// if (eatsPlants) {
//     if (!eatsAnimals) {
//         console.log("herbivore");
//     }
//     else {
//         console.log("omnivore");
//     }
// }
// else if (eatsAnimals) {
//     console.log("carnivore");
// }
// else {
//     console.log("undefined");
// }
var category = eatsAnimals ? (eatsPlants ? "omnivore" : "carnivore") : (eatsPlants ? "herbivore" : undefined);
console.log(category);
