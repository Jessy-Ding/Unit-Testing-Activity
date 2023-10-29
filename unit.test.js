
const greet = require('./unit');  

describe('greet()', function() {

    // Test 1: Simple greeting
    it('should return a simple greeting message', function() {
        expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
    });

    // Test 2: Handling null values
    it('should handle null values by introducing a default', function() {
        expect(greet(null)).toBe('Hello there!');
    });

    // Test 3: Shouting
    it('should shout back when name is all uppercase', function() {
        expect(greet('JOSE')).toBe('HELLO JOSE!');
    });

    // Test 4: Handle two names as input
    it('should greet two names', function() {
        expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
    });

    // Test 5: Handle multiple names as input
    it('should greet multiple names', function() {
        expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
    });

});
