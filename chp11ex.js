/*
    Chp. 11 - examples and sample code
*/



// Chp. 11 - pg. 482 Exercise

// Convert the code below from one that uses a variable as 
// an argument to one that uses an anonymous function expression.
/*
function vaccine(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}

administer(patient, vaccine, time); */
/*
// Solution:
administer(patient, function(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}, time); */



// Chp. 11 - pg. 478
// Below is an example of an anonymous function.
// Instead of setting window.onload = init(); we define the function
// immediately after the assignment operator
/*
window.onload = function() { console.log("The page has loaded.") };

var cookies = {
    instructions: "Preheat oven to 350...",
    bake: function(time) {
        console.log("Baking the cookies.");
        setTimeout(done, time);
    }
};*/

/*
function init() {
    console.log("The page has loaded.");
} */

/*
function done() {
    alert("Cookies are ready, take them out to cool.");
    console.log("Cooling the cookies");
    var cool = function() {
        alert("Cookies are cool, time to eat!");
    };
    setTimeout(cool, 1000);
}*/