const { add, sub, mul, div } = require("../calculator")

function runTest(description, actual, expected) {
    if (actual === expected) {
        console.log(`PASS: ${description} PASS`);
    } else {
        console.log(`FAIL: ${description}. Expected ${expected} FAIL`);
    }
}

runTest("add(5, 2) expected result 7", add(5, 2), 7);
runTest("add(5, 2) expected result 8", add(5, 2), 8);

runTest("sub(5, 2) expected result 3", sub(5, 2), 3); 
runTest("sub(5, 2) expected result 5", sub(5, 2), 5); 

runTest("mul(5, 2) expected result 10", mul(5, 2), 10); 
runTest("mul(5, 2) expected result 12", mul(5, 2), 12); 

runTest("div(10, 2) expected result 5", div(10, 2), 5); 
runTest("div(10, 2) expected result 2", div(10, 2), 2); 