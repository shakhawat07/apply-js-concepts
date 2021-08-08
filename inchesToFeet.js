
// inches to feet conversion 

function inchesToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var inches = 132;
var feet = inchesToFeet(inches);
console.log(inches, ' inches = ', feet, 'feet')

// miles to kilometers conversion 

function milesToKilometers(miles) {
    var kilometers = miles * 1.60934;
    return kilometers;
}
var miles = 26.2;
var kilometers = milesToKilometers(miles);
console.log(miles, ' miles = ', kilometers, 'kilometers');