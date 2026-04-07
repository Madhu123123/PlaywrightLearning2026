let order = new Promise(function(accept, reject) {
    let order = false;
    if (order) {
        accept("Order is accepted");
    } else {
        reject("Order is Cancelled");
    }
});

order.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});