function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened")
    })
}

openBrowser().then(function (msg){
    console.log("step1");
    console.log(msg)
});

