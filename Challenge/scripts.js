let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

// Define a function to log calculations
const logCalc = () => { 
    // Check if the calculated value is a string
    const isString = typeof calculated === 'string'; // Corrected comparison operator and value
    // Convert the calculated value to a number if it's a string
    const calculatedAsNumber = isString ? Number(calculated) : calculated; // Corrected function name and parsing method
    // Update the calculated value by incrementing it by 1
    calculated = calculatedAsNumber + 1; // Corrected assignment operator
}

// Define a function to calculate user state
const calcUser = () => {
    // Log the calculation result
    logCalc(); // Corrected function invocation syntax
    // Update the user and state based on the calculated value
    if (calculated > 2) user = 'John'; // Set the user to 'John' if calculated value is greater than 2
    if (calculated > 2) state = 'requesting'; // Set the state to 'requesting' if calculated value is greater than 2
    if (calculated > 3) state = 'idle'; // Set the state to 'idle' if calculated value is greater than 3
}

// Define a function to check user state and log user information
const checkUser = () => {
    // Check if a user exists and the state is 'requesting'
    if (user && state === 'requesting') {
        // Log the user information including name and calculated value
        console.log(`User: ${user} (${calculated})`);
    }
}

// Only allowed to change code above

// Call checkUser and calcUser functions repeatedly to observe changes in user state and information
checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
