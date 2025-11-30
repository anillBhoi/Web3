fn main() {
    // println!("Hello, world!");
    // let ans = sum(1,7);
    // println!(" {}", ans);
    // let name = "anil"; // fixed string 
    // let lastName = String::from("Bhoi");
    // println!("firstName -> {}", name);
    // println!("Lastname -> {}", lastName);

    let even = is_even(4);
    
    if(even){
        println!("{}: this is even", even);
    } else{
         println!("{}: this is odd", even);
    }
}

// fn sum(a:u32, b:u32)->u32{
//     return a+b;
// }




fn is_even(x:u32)-> bool{
    return x % 2 == 0;
}