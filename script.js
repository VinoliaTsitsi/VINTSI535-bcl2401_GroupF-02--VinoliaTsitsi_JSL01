
function validateSyntax() { /*This line decclares a JS function */
    let input = document.getElementById('petInput').value;/* This line retrives the value entered to the HTML  input element with the ID. 
    Also selects the input element with the ID (PetInput) & value  retrives tjhe pentered into that input element */

    let result = ''; // Placeholder for validation result

    // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (/^pet_\d+[a-zA-Z]+$/.test(input)) {
        // For valid syntax, display a green tick
        result = '<span style="color: green;">&#10004;</span> Valid Syntax';
    } else {
        // For invalid syntax, display a red tick
        result = '<span style="color: red;">&#10008;</span> Invalid Syntax';
    }

    document.getElementById('result').innerHTML = result;
    //updates the HTML element with ID results by setting the  with result tp the
}
