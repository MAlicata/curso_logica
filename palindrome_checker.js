function palindrome(str){
    test = str.split('').reverse().join('');
    return (test === str);
}

console.log("Palindrome checker: ", palindrome("Race Car".toLowerCase()));
