// Question 127:Convert a traditional function expression to an arrow function.
const traditionalFunction = function(a:number, b:number) {
    return a + b;
  };
  console.log(traditionalFunction(3,4));
  
  const arrowFunction = (c:number, d:number) => {
    return c + d;
  };
  console.log(arrowFunction(3,4));
  
    