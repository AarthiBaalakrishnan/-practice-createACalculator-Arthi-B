//create calculator
//absolute value

function absoluteValue(num){
    return(Math.abs(num));
}
console.log(absoluteValue(-45.67));

//power calculation

function powerCalculation(x, y){
    return(Math.pow(x, y));
}
console.log(powerCalculation(5, 3));

//squareroot calculation

function squareRoot(num){
    return(Math.sqrt(num));
}
console.log(squareRoot(144));

//maximum number finder

function findMaxNum(num1, num2, num3, num4, num5){
    return(Math.max(num1, num2, num3, num4, num5));
}
console.log(findMaxNum(3, 78, -12, 
0.5, 27));

// minimum number finder
 
function findMinNUm(num1, num2, num3, num4, num5){
    return(Math.min(num1, num2, num3, num4, num5));
}
console.log(findMinNUm(3, 78, -12, 
0.5, 27));

//random number gerenrator

function randomNumber(min, max){
    return(Math.random(min, max));
}
console.log(randomNumber(1,50));

//custom rounding a number

function roundNumber(num, decimals){
    return Number(num.toFixed(decimals));
}
console.log(roundNumber(23.67891, 2));
//create calculator