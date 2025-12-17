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

}
