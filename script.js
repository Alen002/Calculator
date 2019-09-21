let result = '';

// Numbers for the calculation

function zero() {
    result = result + '0';
    document.getElementById('buttonDisplay').value = result;
}
function one() {
    result = result + '1';
    document.getElementById('buttonDisplay').value = result;

}
function two() {
    result = result + '2';
    document.getElementById('buttonDisplay').value = result;
}
function three() {
    result = result + '3';
    document.getElementById('buttonDisplay').value = result;
}
function four() {
    result = result + '4';
    document.getElementById('buttonDisplay').value = result;    
}
function five() {
    result = result + '5';
    document.getElementById('buttonDisplay').value = result;    
}
function six() {
    result = result + '6';
    document.getElementById('buttonDisplay').value = result;    
}
function seven() {
    result = result + '7';
    document.getElementById('buttonDisplay').value = result;        
}
function eight() {
    result = result + '8';
    document.getElementById('buttonDisplay').value = result;        
}
function nine() {
    result = result + '9';
    document.getElementById('buttonDisplay').value = result;        
}
function comma() {
    result = result + '.';
    document.getElementById('buttonDisplay').value = result;        
}


// Operations
function plus() {
    result = result + '+';
    document.getElementById('buttonDisplay').value = result;        
}
function minus() {
    result = result + '-';
    document.getElementById('buttonDisplay').value = result;        
}
function multiplier() {
    result = result + '*';
    document.getElementById('buttonDisplay').value = result;        
}
function divisor() {
    result = result + '/';
    document.getElementById('buttonDisplay').value = result;        
}

// Execute calculation
function calculate() {
    showResult = eval(result);
    document.getElementById('buttonDisplay').value = showResult;        
    result = '';
}

function erase() {
    result = '';
    document.getElementById('buttonDisplay').value = result;
}