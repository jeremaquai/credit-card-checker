// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// Coded by **Jeremaquai**
//Function that tests an array of numbers that could possibly be credit card numbers and returns true if they are valid numbers and false if they are not using the Luhn algorithm
const validateCred = arr => {
    // Set my function variables
    const tempArray = arr;
    let reversedArray =[];
    let sumAndModuloThisArray = [];
    // Remove last number and add to the array to sum and modulo later
    sumAndModuloThisArray.push(tempArray.pop());
    //Reverse the remaining tempArray numbers and return to the reversedArray to 
    reversedArray = [...tempArray].reverse();
    //Loop through the reversed array
    for (let i = 0; i < reversedArray.length; i++) {
        //check if the number in the array is in an odd or even index and handle it accordingly
        if (i % 2 === 0) {
            //If the numbers index modulo 2 is 0 double it before adding to the array to sum and modulo 10
            let x = reversedArray[i] * 2;
            //console.log(x);
            //if x*2 is over 9 subract 9 from it and then add it to the array to sum and modulo
            if (x > 9) {
                x -= 9;
                //console.log(x);
                sumAndModuloThisArray.push(x);
            } else {
                sumAndModuloThisArray.push(x);
            }
        } else {
            sumAndModuloThisArray.push(reversedArray[i]);
        }
    }
    //add all of the numbers in the sumAndModulo array together
    const sum = sumAndModuloThisArray.reduce((a, b) => a + b);
    //console.log(sum);
    //console.log(sumAndModuloThisArray, tempArray, reversedArray);
    
    //Check if modulo 10 of the sum variable is 0 or not and return true or false accordingly
    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }
};

//Function that takes in a nested array of credit card numbers arrays and returns an array of the invalid card numbers
const findInvalidCards = nestedArr => {
    let invalidCardsArray = [];
    //Loop through the arrays in the nested array that was fed into the function
    nestedArr.forEach(arr => {
        //console.log(arr);
        let checkResult = validateCred(arr);
        //console.log(checkResult);
        if (checkResult === false) {
            invalidCardsArray.push(arr);
        }
    });
    //console.log(invalidCardsArray);
    return invalidCardsArray;
};

//Function that takes in a nested array of invalid credit card number arrays and determines which company issued the invalid numbers
const idInvalidCardCompanies = nestedArr => {
    let cardCompanies = [];
    let company;
    nestedArr.forEach(arr => {
        let firstCardNumber = arr[0]
        //console.log(firstCardNumber);
        switch (firstCardNumber) {
            case 3:
                company = 'Amex';
                checkCompaniesArray(cardCompanies, company);
                break;
            case 4:
                company = 'Visa';
                checkCompaniesArray(cardCompanies, company);
                break;
            case 5:
                company = 'Mastercard';
                checkCompaniesArray(cardCompanies, company);
                break;
            case 6:
                company = 'Discover';
                checkCompaniesArray(cardCompanies, company);
                break;
            default:
                company = 'Company not found';
                checkCompaniesArray(cardCompanies, company);
        }
    });
    return cardCompanies
};

// Check company function used in inValidCardcompanies function to keep from writing the same code over and over in the switch statement
const checkCompaniesArray = (arr, comp) => {
    const companyCheckResult = arr.includes(comp);
    if (companyCheckResult === false) {
        arr.push(comp);
    }
};

// Fuynction takes in a credit card number as a string and returns an array of that number
const cardNumberStringToArray = (numberString) => {
    let numberArray = [];
    for (let i = 0; i < numberString.length; i++) {
        let parsed = parseInt(numberString[i]);
        numberArray.push(parsed);
    };
    return numberArray;
};

// Function calls for testing

//console.log(validateCred(valid3));
//const test1 = findInvalidCards(batch);
//console.log(test1);
//const idTest = idInvalidCardCompanies(test1);
//console.log(idTest);
//console.log(cardNumberStringToArray('1234567890'));

