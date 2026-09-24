// Type Annotations in TypeScript are a way to explicitly specify the types of variables, function parameters, and return values. This helps catch errors at compile time and improves code readability. In the provided code snippet, various type annotations are used to define the types of different variables.
// console.log('Hi There'); //npm start
// const myName: string = 'Mohammed Agiba';
// console.log(myName);
// const exType: any = undefined;
// const ten: number = 10;
// const decimal: number = 1.0002
// const negative: number = -1000;
// const isTrue: boolean = true;
// const nothingHere: null = null;
// const noDefinition: undefined = undefined;

/*Type Inference*/
let myName;

if ( 1 === 1) {
    myName = 'Mohammed Agiba';
} else{
    myName = 'Stephen Grider';
}
myName = 10; // This will cause a type error because myName is inferred to be of type string based on the initial assignment.
myName = 'Alice'; // This is valid as it matches the inferred type of string.
myName = undefined; // This will also cause a type error because myName is inferred to be of type string and cannot be assigned undefined.