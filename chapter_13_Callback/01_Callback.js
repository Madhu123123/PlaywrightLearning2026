function placeOrder(item, callback)
{
    console.log("placing order");
    callback();
}

function print()
{
    console.log("Done the order")
}

placeOrder("Burger",print);