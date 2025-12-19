fn main() {

    // What happens if we overflow ?

    // let mut num: i8 = 124;
    // for _i in 0..100 {
    //     num += 127;
    // }
    // println!("{}", num);

    // this above gives this error 
    //    Compiling RustPractice v0.1.0 (/mnt/e/webThree/Rust/RustPractice)
    //    Finished `dev` profile [unoptimized + debuginfo] target(s) in 2.16s
    //    Running `target/debug/RustPractice`

    //   thread 'main' (410) panicked at src/main.rs:5:9:
    //   attempt to add with overflow
    //   note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace



    // Boolean 
    
    let is_male = false;
    let is_above_18 = true;

    if is_male {
        println!("You are a male !");
    } else {
        println!("You'r not a male ");
    }

    if is_male && is_above_18 {
        println!("Your are the real men (:");
    }



    // String 
    let greeting = String::from("Good morning (:");
    println!("{}", greeting);

    
    // Arrays 
    let arr: [i32; 5] = [1,2,3,4,5];
    println!("{}", arr.len());


    // Vectors 
    let mut xs = vec![1,2,3];
    println!("{}", xs.len());
    xs.push(4);
    println!("{}", xs.len());


    // ## Conditionals , Looops  

    let x = 99; 
    let is_even = is_even(x); 

    if is_even {
        println!("{} is even ", x);
    } else {
        println!("{} is odd ", x);
    }


    // Looop 
    let str = String::from("Anil Bhoi");
    println!("first name {}", get_first_name(str));



    //# Ownership and heap Variables 

       // Ownership Rules -> 
           // First, let's take a look at the ownership rules. Kepp these rules in mind as we through the examples that illustrate them: 
             // - Each value in Rust has a owner.
             // - There can only be one owner at a time.
             // - When the owner goes out of scope, the value will be dropped.


                 let str1 = String::from("anil");
                 let len = get_length(str1);
                 println!("{}", len);
               
               
                //  print!("{}", str1);  // this line gives error like this value borrowed here after move.
                       // here the code fails becos of ownership of str1 is moved to the get_length function. Once the functions scope ends, the str1 variable is no longer valid.

                 // Fix #1 - Transferring back ownership 
                 let str2 = String:: from("Anil");
                 let (str2, len) = get_length2(str2);
                 println!("{} : {}", str2, len);

                 // Fix #2 -  Borrowing and references --  Rather than transferring ownership to a function, you can let the function borrow the variable.
                 
                 let str3 = String::from("Anil");
                 let len3 = get_length3(&str3);  // When you pass a variable by reference, the variable is still owned by the first function. It is only borrowed by the get_length3 function.
                 println!("{} {}", str3, len3);

                 // Rules of borrowing - 
                     // 1. You can only have one immutable reference. If there is an immutable reference, there cant be other immutable or mutable references
                     // 2. You can have multiple immutable references
                  



             // # Quiz  --> 
          
                 // 1. will this code works  ? 
                 let str4 = String::from("AnilB");
                 let ref1 = &str4;
                 let ref2 = &str4;

                 println!("{} {}", ref1, ref2);   // yes this code works correctly.

                    


                 // 2. Will this code compile -
                  let mut str5 = String::from("Anna");
                  let ref3 = &mut str5;
                  //let ref4 = &str5;    // // this code gives error like cannot borrow 'str5' as immutable becos it is also borrowed as mutable

 
                 // println!("{} {}", ref3, ref4); 
                  //3. will this code compile 

                  let mut str6 = String:: from("Hello");  
                  let ref5 = &mut str6;
                  ref5.push_str(" world");
                  let ref6 = &str6;
                  println!("{}", ref6);  // yes this code works correctly.


                  // Structs 

                        // Structs in rust let you structure data together. similar to objects in javascript.

                        // In Rust a struct is a data modeling primitive used to group logically related data into a single, strongly typed unit.
                        // From a system design standpoint, structs are the backbone for representing state, configuration, and domain entities.
                  let user1 = User {
                     id: 1,
                     balance: 1_000,
                     is_active: true,
                  };

                  println!("User 1 username: {:?}", user1.username);


                  let mut user = User {
                           id: 1,
                           balance: 1_000,
                           is_active: true,
                    };

                    user.balance += 500;
                    // importants points 
                      // 1. The struct itself must be marked mut
                      //2.Individual fields don't carry mutability - the binding does
                      // 3. Ownership transfer applies to the entire struct.


}         

pub fn is_even(x: i32) -> bool {
    return x % 2 == 0;
}

pub fn get_first_name(str: String) -> String {
    let mut first_name = String::from("");
    for c in str.chars() {
        if c == ' '{
            break
    }
    first_name.push(c);
}
return first_name;
}

fn get_length(str1: String) -> usize{
    return str1.len();
}


fn get_length2(str2: String) -> (String, usize) {
    let len = str2.len();
    return (str2, len);
}

fn get_length3(str3: &String) -> usize {
    let len = str3.len();
    return len;
}


// Structs 
struct User {
      id: u64,
    balance: u64,
    is_active: bool,
}

// # Implementing structs (impl blocks)
   
   // Purpose of impl 
      // An impl block attaches behavior to a struct, forming an abstraction boundary similar to methods in OOP - but without inheritance or runtime cost.
          // in simple terms -> A strcut is just data. and An impl block is where you write functions that work on that data.
          // Rust intentionally separates: 
             // 1.What data look like -> struct
             // 2. What data can do -> impl

            //   let mut user = User {
            //                id: 1,
            //                balance: 1_000,
            //                is_active: true,
            //         };


            // this above user is initialized but they dont have any behavior function that belongs to struct.so for defines the fun we use impl 
      impl User {
        fn add_balance(&mut self, amount: u64) {
           self.balance += amount;
        }
      }

         //- For User, define a function called add_balance
         //- This function is allowed to change the user (&mut self)
         // self -> means this user (this object)
         //  self.balance -> means this user's balance

         // self explained 
          // 1. self -> this object
          // 2. &self -> read-only access
          // 3. &mut self  -> can change data 


          // Q. Why does Rust restrict methods to impl blocks?
            // -> Rust enforces a strict seperation between data and behavior to maintain owership and mutability guarantees. 
            // By requiring methods to be defined inside impl blocks, Rust ensures that all state transitions are explicit, auditable and checked at compile time.
