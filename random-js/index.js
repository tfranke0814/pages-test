        // Comment: This is a simple JavaScript code snippet
        // My first JavaScript code
        console.log('Hello, World!');

        let name = 'John Doe';
        console.log(name);

        // Cannot be a reserved keyword
        // Should be meaningful'
        // Can't start with a number (e.g. 1name)
        // Cannot contain spaces or hyphens
        // They're case-sensitive. Use camelCase for multi-word variables

        //let firstName = 'John', lastName = 'Doe';

        // This is a better practice
        let firstName = 'John';
        let lastName = 'Doe';

        let interestRate = 0.3; // Interest rate
        interestRate = 1; // Interest rate changed
        console.log(interestRate);

        const interestRateConst = 0.3;
        // interestRateConst = 1; // This will throw an error because const cannot be reassigned
        console.log(interestRateConst);

        // Primitive types
        let firstNameStr = 'John'; // String Literal
        let age = 30; // Number Literal
        let isApproved = true; // Boolean Literal
        let selectedColor = null; // Null Literal
        let person; // Undefined Literal

        typeof firstNameStr; // 'string'
        console.log(typeof age); // 'number'
        console.log(typeof isApproved); // 'boolean'
        console.log(typeof selectedColor); // 'object' (this is a known JavaScript quirk)
        console.log(typeof person); // 'undefined'

        // Reference types
        let selectedColors = ['red', 'blue']; // Array Literal
        console.log(selectedColors); // ['red', 'blue']

        let personObj = {
            name: 'John',
            age: 30
        }; // Object Literal
        console.log(personObj); // { name: 'John', age: 30 }
        // Dot notation to access object properties
        personObj.name = 'Johnny'; // Change name property
        console.log(personObj.name); // 'Johnny'
        // Bracket notation to access object properties
        console.log(personObj['age']); // 30
        personObj['age'] = 31; // Change age property

        let selection = 'age';
        console.log(personObj[selection]); // 31

        let selectedColorsArray = ['red', 'blue', 'green'];
        console.log(selectedColorsArray.length); // 3
        selectedColorsArray[2] = 'yellow'; // Change third element
        console.log(selectedColorsArray); // ['red', 'blue', 'yellow']
        selectedColorsArray[3] = 56; // Add new element
        console.log(selectedColorsArray); // ['red', 'blue', 'yellow', 56]

        // Functions
        function greet(name, lastName = 'Doe') {
            console.log('Hello ' + name + ' ' + lastName);
        }
        greet(personObj.name); // Call function with argument 'Johnny'

        // Calculating a value
        function square(number) {
            return number * number; // Return the square of the number
        }
        console.log(square(2)); // Call function with argument 2, should return 4
        console.log(square(3)); // Call function with argument 3, should return 9