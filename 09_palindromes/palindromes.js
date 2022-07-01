const palindromes = function (str) {
    let lcStr = str.toLowerCase();

    let punctuationless = lcStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let spaceless = punctuationless.replace(/[" "]/g,"");

    //Reverse the string
    let splitString = spaceless.split("");
    let reverseArray = splitString.reverse();
    let palindrome = reverseArray.join("");

    //Check if the string is a palindrome
    if (palindrome == spaceless) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;