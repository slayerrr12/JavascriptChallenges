// in this file we will loop through arrays

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


//break statements 
// they are used to break the loop on a certain condition 

console.log( `odd numbers from 1 to 10`)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

    if (element%2 === 0) {
        
        
        continue;

        
        // the part after this continue statement or the logic that is written after this continue statemet will be omitted
        // and wont be executed and the loop will perform the operation specfied after the condition and perform the new iteration 

        console.log("ji")
        // as you can see this console.log("ji") statement wont be executed becaause just afte the continue statement hits 
        // the loop will begina  new iteration






    }
    console.log(element)

}


// use cases of break statements : 
// 1Exiting a loop prematurely when a specific condition is met.
// 2Terminating a loop early upon finding a desired item or condition.
// 3Preventing infinite loops by breaking out after a certain number of iterations or when a condition is satisfied.
// 4Handling errors or exceptions within a loop by immediately exiting.
// 5Exiting a menu selection loop upon selecting a valid option.

for (let index = 0; index < myArray.length; index++) {
        if (myArray[index]===4) {

            console.log(`the number 4 is at a postion ${index} in the array (starting from zero) `)
            
        }
    
}