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

    
    

    



