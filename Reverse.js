

function reverse(array) {
    let ArrayReversed = [];
    for (i = array.length - 1; i >= 0; i--) {
        ArrayReversed.push(array[i])
    }
    return ArrayReversed;
}

function ReverseArrayInPlace(ArrayReversed) {
    let ReversedArrayInPlace = [];
    for (i = ArrayReversed.length - 1; i >= 0; i--) {
        ReversedArrayInPlace.push(ArrayReversed[i])
    }
    return ReversedArrayInPlace;
}


console.log(ReverseArrayInPlace(reverse([1, 2, 3, 4, 5])))
