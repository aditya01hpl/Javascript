function sum(a, b) {
    return a + b// Your code here
}

// Example usage:
//console.log(sum(3, 5)); // Output: 8

function isPalindrome(str) {
    var str2 = str.split('').reverse().join('')
    if (str2 === str) {
        return true
    }
    return false// Your code here

}


// Example usage:
//console.log(isPalindrome("racecar")); // Output: true
//console.log(isPalindrome("hello"));   // Output: false

/*Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."*/
function fizzBuzz() {
    // Your code here
    for(var i=1;i<=100;i++){
        if(i%3==0){
            console.log("Fizz")
        }
        else{
            console.log(i)
        }
    }
    return 0
}

// Example usage:
fizzBuzz(); // Should print 1, 2, Fizz, 4, Buzz, Fizz, ...


