var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    _array = sampleArray.pop() + 1;
    // console.log(_array);
    // console.log(sampleArray);
    // Your code goes in here!
    // sampleArray.pop()
    sampleArray.push(_array);
    newArray = sampleArray;

    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
