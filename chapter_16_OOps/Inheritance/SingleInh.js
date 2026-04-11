class A {
    constructor(name)
    {
        this.name = name;
    }

    display()
    {
        console.log("Hi hello i am from A class")
    }

}

class B extends A
{
       
}


page = new A();

page.display();