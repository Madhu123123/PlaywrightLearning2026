let response = 1200;

switch (response) {
    case 200:
        console.log("OK");  
        break;
    case 404:
        console.log("Not Found");
        break;  
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown Response");
}