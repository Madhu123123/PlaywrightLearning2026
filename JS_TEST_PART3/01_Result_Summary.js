results = [{ name: "open login", status: "passed", durationMs: 400 }, 
    { name: "fill form", status: "failed", durationMs: 700 }, 
    { name: "submit", status: "skipped", durationMs: 0 }]

    let steps =0;

for(let i=0; i<results.length; i++)
{
    console.log(results[i]);
    steps++
}
console.log("Total steps: ",steps);


//output: Total Steps: 3 
// Passed: 1 Failed: 1 Skipped: 1 
// Total Duration: 1100ms 
// Failed Steps: fill form