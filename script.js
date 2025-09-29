// If statements
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
let day = 4;
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
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Control Flow with break and continue



// Scope and Context
