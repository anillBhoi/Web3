// fn main() {
//     println!("Hello, world!");
//      println!("{}", is_even(10));

//      // string 
//      let name = String::from("Anil");
//      println!("{}", name);

//      // vector   
//      let nums: Vec<i32> = vec![1,2,3];
//      // if we want to print a vector we have to do this
//      println!("{:?}", nums);


//      // simple for loop in rust 
//      for j in 0..100 {
//           println!("{}", j);
//      }

//      // by default rust is immutable language (means value cannot change after define ) like let x:i32 =1; and we do x = 2; so it gives error 
//      // becos of immutablity so if we remove immutability we have to use mut keyword in front of variable like let mut y:i32 = 3; y = 4;

//      let mut x:i32 = 1;
//      x = 3;
//      println!("{}", x);

     

    
     
// } 

 // function in rust 
fn is_even(a:u32) -> bool {
     return a % 2 == 0
}


// string required memory management but numbers and boolean not because numbers and bollean take fixed memory size. and string not 

// rust is a fast and safe language there is no need of manual memory managament
// there is something called ownership rules 


// in rust we dont want to do manual memory management like  C langauge. rust is very smart it does by own 
 
 // # Ownership Rules : -> First, let's take a look at the ownership rules. Keep these rules in mind as we work through the examples that illustrate them:
      
      // 1. Each value in Rust has an Owner.
      // 2. There can be only be one owner at a time.
      // 3. When the owner goes out of scope, the value will be dropped.





      // # Structs -> 

          // Structs in rust let you structure data together. Similar to Objects in Javascript 

          struct User {
               active: bool,
               username: String,
               email: String, 
               sign_in_count: u64,

          }

          fn main() {
               let user1 = User {
                    active: true, 
                    username: String::from("anil134"),
                    email:String::from("anil@gmail.com"),
                    sign_in_count: 1, 

               };

               print!("User 1 username : {:?}", user1.username);

               

               // enum part 

               let my_direction = Direction::North;
               let new_direction = my_direction; // no error, because direction is copy
               move_around(new_direction);

          }


          // # Enums -> 

            // Enums in Rust are similar to enums in Typescript. They allow you to define a type by enumerating its possible variants.

            enum Direction {
               North, 
               East, 
               South,
               West,
            }

            fn move_around(dir: Direction) {
               // pattern matching 
               match dir {
                    Direction:: North => print!("North direction"),
                    Direction::South => print!("South Direction"),
                    _=> println!("Horizontal direction")
               }
            }





// # Macros 

    // in Rust, macros are a powerfull feature that allows for metaprogramming by enabling the generation of code at compile-time.
    // Macros in Rust are similar to function but differ in that they operate 
    // at the syntactic level-they generate or transform Rust code before the program is actually compiled.

    // Key Concept of Rust Macros:

          // 1. Code Generation: Macros allow you to define a pattern for generating code. This means you 
               // can write code that produces other code, reducing redundancy and boilerplate.

          //2. Metaprogramming: Rust macros are a form of metaprogramming because they allow you to write code that writes or 
               // manipulates other code. This can useful for tasks like reducing boilerplate, 
               // creating domain-specific language (DSLs), or automating repetitive patterns.

               
                    