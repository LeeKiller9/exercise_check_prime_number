let count = 0;
let number = +(prompt("Enter number want to check:"))
document.getElementById("result").innerHTML = checkPrime(number);

function checkPrime(num) {
    let result = "";
    if (num < 2) {
        result = "F**king Error!"
        return result;
    } else {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
        }
    }
    if (count === 2) {
        result = num + " is prime number!"
    } else {
        result = num + " is not prime number!"
    }
    return result;
}


