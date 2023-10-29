function greet(name) {
    //null values
    if (name === null || name === undefined) {
        return "Hello there!";
    }
    
    // Check if name is a string
    if (typeof name === 'string') {
        // Handle shouting
        if (name === name.toUpperCase()) {
            return `HELLO ${name}!`;
        }
        return `Hello, ${name}`;
    }
    
    //an array of names
    if (Array.isArray(name)) {
        // Handle two names
        if (name.length === 2) {
            return `Hello, ${name[0]}, ${name[1]}`;
        }

        //arbitrary number of names
        return `Hello, ${name.join(', ')}`;
    }
}

module.exports = greet;

// // Test cases
// console.log(greet("Elizabeth"));  // "Hello, Elizabeth"
// console.log(greet(null));         // "Hello there!"
// console.log(greet("JOSE"));       // "HELLO JOSE!"
// console.log(greet(['Jose','Pep']));  // "Hello, Jose, Pep"
// console.log(greet(['Alex','Arsene','Jose','Zidane']));  // "Hello, Alex, Arsene, Jose, Zidane"

