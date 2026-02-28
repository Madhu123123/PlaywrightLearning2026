let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

if (isPresent && isDisplayed && isEnabled) {
    console.log("READY");
} 
else if (!isPresent && !isDisplayed && !isEnabled) {
    console.log("DISABLED");
} 
else if (isPresent && !isDisplayed && !isEnabled) {
    console.log("HIDDEN");
} 
else if (!isPresent) {  
    console.log("NOT FOUND");
} 
else if (!isDisplayed || !isEnabled) {
    console.log("WARNING");
}
