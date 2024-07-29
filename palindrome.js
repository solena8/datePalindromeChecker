/*
Étape 1
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. 
Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - 
autrement dit, l’année sera systématiquement représentée sur 4 caractères.*/

function isValidDate(dateString) {
  const dateParts = dateString.split("/");
  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const year = parseInt(dateParts[2]);

  const date = new Date(year, month, day);
  if (year > 9999 || year < 1000) {
    return false;
  }
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}

const date_1 = "02/02/2020";

const date_2 = "03/02/2020";

const date_3 = "56/02/2020";

//console.log(isValidDate(date_1));

/* Étape 2
Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si 
la date est un palindrome. Si la date est invalide, retourner false.
Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.*/

function isPalindrome(dateString) {
  if (isValidDate(dateString)) {
    const dateJoined = dateString.split("/").join("");
    return dateJoined == dateJoined.split("").reverse().join("");
  } else {
    console.log("Not a valid date");
    return false;
  }
}

// console.log(isPalindrome(date_1)); // true
// console.log(isPalindrome(date_2)); // false not a palindrome
// console.log(isPalindrome(date_3)); // false invalid date
// console.log(isPalindrome("11/02/2011")); // true
// console.log(isPalindrome("03/04/2001")); // false

/*Étape 3
Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La 
fonction prendra le x en paramètre.

getNextPalindromes(8)
22/02/2022
03/02/2030
13/02/2031
23/02/2032
04/02/2040
14/02/2041
24/02/2042
05/02/2050*/

function getNextPalindromes(x) {
  let tomorrow = new Date();
  let result = [];
  while (result.length < x) {
    tomorrow.setDate(tomorrow.getDate() + 1);
    let tomorrowFRFormat = tomorrow.toLocaleDateString("en-GB");
    if (isPalindrome(tomorrowFRFormat)) {
      result.push(tomorrowFRFormat);
    }
    if (tomorrowFRFormat === "31/12/9999") {
      break;
    }
  }
  console.log(result);
}

getNextPalindromes(8);

/*
Étape 4
Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine 
de caractère est un palindrome. Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les 
spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.*/

function isPalindrome2(givenString) {
  return givenString === givenString.split("").reverse().join("");
}

//console.log(isPalindrome2("mwahaha"));
//console.log(isPalindrome2("coucuoc"));

function isDatePalindrome(dateString) {
  if (isValidDate(dateString)) {
    const dateJoined = dateString.split("/").join("");
    return isPalindrome2(dateJoined);
  } else {
    return "invalid date";
  }
}

console.log(isDatePalindrome("01/03/3010"), "is true");
console.log(isDatePalindrome("01/03/3020"), "is false");
console.log(isDatePalindrome("01/40/3010"), "is invalid");
