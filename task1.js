const data = [1, 3, 2, 7, 3, 3];

function forEach(arr, callback) {
    for (let value of arr) {
        callback(value);
    }
};

function callBack(v) {
    console.log(v)
};

forEach(data, callBack);

console.log("");

function multiply(value) {
    return value * 2;
}

function map(arr, callback) {
    const resultArray = [];
    for (let value of arr) {
        const resultCallback = callback(value);
        resultArray.push(resultCallback);
    }
    return resultArray;
};

const r = map(data, multiply);

console.log("map", r);

console.log("");

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    } else {
        return false
    }
};

function filter(arr, callback) {
    const resultArray = [];
    for (let value of arr) {
        const resultCallback = callback(value)
        if (resultCallback === true) {
            resultArray.push(value);
        }
    };
    return resultArray;
};

const r1 = filter(data, isEven);

console.log("filter", r1);

console.log("")


function some(arr, callback) {
    const resultArray = [];
    for (let value of arr) {
        const resultCallback = callback(value);
        resultArray.push(callback(value))
    };
    for (let boolean of resultArray) {
        if (boolean === true) {
            return true
        }
    } return false
};

const r2 = some(data, isEven);

console.log("some", r2);

console.log("")

function every(arr, callback) {
    const resultArray = [];
    for (let value of arr) {
        const resultCallback = callback(value);
        resultArray.push(callback(value))
    };
    for (let boolean of resultArray) {
        if (boolean === false) {
            return false
        }
    } return true
};

const r3 = every(data, isEven);

console.log("every", r3);

console.log("")