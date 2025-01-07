//suma de rangos

function range(inicio, fin, paso) {
    let array = [];
    if (paso === undefined) {
        for (let i = inicio; i <= fin; i++) {
            array.push(i);
        }
    } else {
        for (let i = inicio; i <= fin; i += paso) {
            array.push(i)
        }
    }
    return array;
}

function sum(array) {
    let summary = 0;
    for (let num of array) {
        summary += num;
    }
    return summary;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2))

