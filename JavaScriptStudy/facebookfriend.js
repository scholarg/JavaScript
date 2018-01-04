var facebookProfile = {
    name: "Scholar",
    friends: 100,
    messages: ["hello", "hahaha", "have a good one!"],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
        facebookProfile.friends += 1;
    },
    removeFriend: function () {
        facebookProfile.friends -= 1;
    }
};
facebookProfile.postMessage(123);
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
