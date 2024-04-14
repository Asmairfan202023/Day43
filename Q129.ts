// Question129:Explain how this behves differently in arrow functions compared to traditional function.
const traditionalVsArrow ={
    value : "traditionaArrowValue",
    traditionalFunction: function(){
        console.log ("Traditiona function:", this.value);
    },
    arrowFunction: ()=>{
        console.log("Arrow Function", this.value);
    }
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();