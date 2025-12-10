//Typscript being a syntactic superset means it shares the same
// base syntax as JavaScript, but adds something to it.


// For example, TypeScript will report an error when passing 
// a string into a function that expects a number.
// JavaScript will not.


// Typscript uses compile time type checking.
// Which means it checks if the specified types match before running the code, not while running the code.


// Typescript being converted into JavaScript means it runs anywhere that Javascript runs!




// # Typescript simple types  ->>

     // The most basic types in Typescript are called primitives.

     // most often five primitive types you'll use

         // 1. Boolean 
              let isActive:boolean = true;

              let hasPermission = false;  // Typescript infers 'boolean' type 



        // 2. Number
        
              // Represents both integers and floating-point numbers.
              // ts uses the same number type for all numeric values.


              let decimal:number = 6;
              let hex:number = 0xf00d; // Hexadecimal
              let binary:number = 0b1010; // Binary
              let octal: number = 0o744;  // Octal
              let float: number = 3.14;  // Floating point


            

        // 3.String
          
         // Represents text data.
         //Can use single quotes ('), double quotes ("), or backticks (`) for template literals.

         let color: string = "blue";
         let fullName: string = 'John Doe';


         
// Basic explicit types 

    let greeting: string = "Hello, Typescript";

    function greet(name: string):string {
        return `Hello, ${name}!`;
    }

    greet("Anil");

    
    

const names: string[] = [];

names.push("anil");


// ReadOnly keyword can prevent arrays from being changed.
const namess:readonly string[] = ["anil"];

  // namess.push("jack");  Error : property 'push' does not exist on type 'readonly' string[].
  // try removing the readonly modifier and see if it works ?



  // # Tuple 
        // tuple is typed array with a pre-defined length and types for each index.
        // Tuples are great because they allow each element in the array to be a known type of value.
        // To define a tuple, specify the type of each element in the array:


  
        let ourTuple :[number, boolean, string];

        // initialize correctly

         ourTuple = [5,false, 'hey there ']; // if we initialized it incorrectly which throws an error 



//# TypeScript Objects 

     const car: {type:string, model:string, year:number} = {
        type: "Toyota", 
        model: "Corolla", 
        year: 2009
     };




     // # Enums 

        // An Enum is a special "class" that represents a group of constants (unchangeable variables).
        // Enum come in two flavors string and numeric.

        // Numeric Enums - Default 
           // By default, enums will initialize the first value to 0 and add 1 to each additional value:



     
           
 // # Generics 
 
         // Generics allow creating 'type variables' which can be used to create classes, functions & type 
         // aliases that don't need to explicitly define the types that they use.

         // Generics make it easier to write reusable code.

         // functions Generics with functions help create more general functions that accurately represent input and return types.


                function createPair<S,T>(v1:S, v2:T):[S,T] {
                    return [v1, v2];
                }
                console.log(createPair<string,number>('hello', 42));