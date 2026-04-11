class Browser
{
    constructor (name)
    {
        this.name = name;
        this.isOpen = false;
        console.log(name + " launched");
    }
    startBrowser() {
        console.log("starting the browser")
        this.isOpen = true;
    }
    closeBrowser() {
        console.log("closing the browser")
        this.isOpen = false;
    }

}


let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(chrome.isOpen);