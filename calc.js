function equivalentCheck() { //This allows the last value to remain in view until other buttons are pressed
    if (parseInt(document.getElementById(`equivalent`).value)){

        document.getElementById(`equivalent`).value = 0;
        document.getElementById(`result`).value = 0;
    }
}

function input(x) {

    equivalentCheck();

    let y = parseFloat(document.getElementById(`result`).value);

    if (document.getElementById(`decimalVar`).value == 0)
    {
        x += y * 10   //multiply by ten and add the value of X
        
        document.getElementById(`result`).value = x; //Return X to the text output.
    }
    else {
        //If decimal is true

        let decimalCount = parseInt(document.getElementById(`decimalVar`).value);
        
        if (decimalCount == 1) {

            x *= 1/10; // Using math to place the decimal point. 
            y += x;
            document.getElementById(`result`).value = y;
        }
        else {
            document.getElementById(`result`).value += x;
        }

        decimalCount++;

        document.getElement(`decimalVar`).value = decimalCount; // 
    }
    

}



    function decimalPoint() {
        if (document.getElementById(`decimalVar`).value == 0){ //This function prevents multiple decimal points.
            document.getElementById(`decimalVar`).value = 1;

        }

        if (parseInt(document.getElementById(`operation`).value)) { // If this is an empty string, it will return false.
            document.getElementById(`result`).value = 0;
        }

    }




function operAndCheck() {
    if (document.getElementById(`operAnd`).value =="") {
        
        document.getElementById(`operAnd`).value = document.getElementById(`result`).value;
        document.getElementById(`equivalent`).value = 1;
    }
    else {
        operatorCheck();
    }
}

function operatorCheck() {

    let a = parseFloat(document.getElementById(`operAnd`).value);
    let b = parseFloat(document.getElementById(`result`).value);

    switch (parseInt(document.getElementById(`operation`).value)) {

        case 1: //addition
            a += b;
            break;
        case 2: // subtraction
            a -= b;
            break;
        case 3: //multiply
            a *= b;
            break;
        case 4: //divide
            a /= b;
            break;
    }

    document.getElementById(`operAnd`).value = a;
    document.getElementById(`result`).value = a;
    document.getElementById(`equivalent`).value = 1;
}

function operators(x) {
    switch(x) {
        case 1:
            document.getElementById(`operation`).value = 1; //addition
            break;
        case 2:
            document.getElementById(`operation`).value = 2; //subtraction
            break;
        case 3:
            document.getElementById(`operation`).value = 3; //multiplacation
            break;
        case 4:
            document.getElementById(`operation`).value = 4; //division
            break;
        default:
    }

    operAndCheck();
}







function equals() {

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById(`result`).value = document.getElementById(`operAnd`).value;
    document.getElementById(`operAnd`).value = "";
    document.getElementById(`equivalent`).value = 1;
}
    /* This gives us the end result of the operation */






function allClear() {
    document.getElementById(`result`).value = 0;
    document.getElementById(`operAnd`).value = "";
    document.getElementById(`operation`).value = 0;
    document.getElementById(`equivalent`).value = 0;
}
    /* ^ This sets the input back to zero and 'clears' the calculation */







function plusMinus() {
    let x = parseFloat(document.getElementById(`result`).value);

    x *= -1;

    document.getElementById(`result`).value = x;
}
    /* ^ This allows us to give the Plus or Minus feature to the number in the input box */









function percent() {
    let x = parseFloat(document.getElementById(`result`).value);

    x *= 0.01;

    document.getElementById(`result`).value = x;
}
    /*This gives us the percentage of the input box */








function square() {
    let x = parseFloat(document.getElementById(`result`).value);

    x *= x;

    document.getElementById(`result`).value = x;
}
    /* This allows us to have the number inputted x by itself- giving us the square function */

