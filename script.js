// If statements
console.log("If statements:");
let number = 3;

if (number > 0) {
    console.log("number = positive");
}
else if (number < 0) {
    console.log("number = negative");
}
else {
    console.log("number = zero");
}

// Switch statements
console.log("\nSwitch statements (random number):");
let day = Math.floor(Math.random() *10 - 1);

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Please use a number between 1 and 7");
        break;
}

// Loops
console.log("\nFor loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\nWhile loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


console.log("\nDo-while loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Control Flow with break and continue
console.log("\nControl flow with break and continue:");
console.log("Break example:");
for (let k = 1; k <= 10; k++) {
    if (k === 3) {
        break; // Exit the loop at k = 3
    }
    console.log(k);
}


console.log("Continue example:");
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue; // Skip i = 3
    }
    console.log(i);
}

// Scope and Context
console.log("\nScope and Context:");
let globalVariable = "This is a global variable.";

function scopeExample() {
    let localVariable = "This is a local variable.";

    console.log(globalVariable);
    console.log(localVariable);
    console.log("Both local and global variables are accessible inside the function.\n");
}

scopeExample();

console.log(globalVariable);
console.log("\nLocal variable is not accessible outside the function.");