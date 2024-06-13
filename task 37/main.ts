function make_shirt (size = "medium", message = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with ${message} printed on it`)
}
make_shirt(); //Default large and message
make_shirt("medium"); // Default message and medium size
make_shirt("small", "Dive into coding") //Custom size and message
