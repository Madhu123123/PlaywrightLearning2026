const cal = {
    value:0,
    add(n){
        this.value +=n;
        return this;
    }
}

console.log(cal.add(5));