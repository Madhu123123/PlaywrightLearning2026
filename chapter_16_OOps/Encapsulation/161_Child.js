class Mother{

    #child1;
    #child2;

    constructor(name1, ch1, ch2)
    {
        this.name1 = name1;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1;
    }

    getChild2() {
        return this.#child2;
    }
}

let p = new Mother("Madhu", "HS1" , "HS2")
console.log(p.getChild1());