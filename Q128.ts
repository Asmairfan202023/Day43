// Question128:Create an arrow function that takes multiple parameters and return the product of all parameters.
const productParameters = (...numbers:number[])=>{
     
    if (numbers.length===0){
        return 0;
    }
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};
console.log(productParameters(2,3,4));
console.log(productParameters(3,4,6,7));
console.log(productParameters());



  