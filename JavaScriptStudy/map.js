const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

// for (const member of members) {
//     const [x, y] = member
//     console.log(x, y);
// }

members.forEach((v, k) => console.log(v, k));
