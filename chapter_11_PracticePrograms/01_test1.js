let s = "*";

for(let i = 0; i < 5; i++) {
    for(let j = 4; j >= i; j--) {
        process.stdout.write(s);
    }
    console.log();  // New line after each row
}
