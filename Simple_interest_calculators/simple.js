function check_interest() {
    let interest = document.getElementById("interest").value;
    console.log(interest)

    if (isNaN(interest)) {
        document.getElementById("error1").value
        error1.innerText = "Please enter numeric value";
    } else {
        error1.innerText = "";
    }
    
    // Clear result1 inner text
    document.getElementById("result1").innerText = "";
}

document.getElementById('interest').addEventListener("input", check_interest);

function check_time() {
    let time = document.getElementById("time").value;
    console.log(time)

    if (isNaN(time)) { 
        document.getElementById("error2").value;
        error2.innerText = "Please enter numeric value";
    } else {
        error2.innerText = "";
    }
    
    // Clear result1 inner text
    document.getElementById("result1").innerText = "";
}

document.getElementById('time').addEventListener("input", check_time);

function check_amount() {
    let amount = document.getElementById("amount").value;
    console.log(amount)

    if (isNaN(amount)) {
        document.getElementById("error3").value;
        error3.innerText = "Please enter numeric value";
    } else {
        error3.innerText = "";
    }
    
    // Clear result1 inner text
    document.getElementById("result1").innerText = "";
}

document.getElementById('amount').addEventListener("input", check_amount);

function CALCULATE() {
    let interest = document.getElementById("interest").value;
    let time = document.getElementById("time").value;
    let amount = document.getElementById("amount").value;

    let result = (time * interest * amount) / 100;
    console.log(result);

    if (interest == "" || time == "" || amount == "") {
        document.getElementById("result1").innerText = "Please enter all values";
    } else if (isNaN(result)) {
        document.getElementById("result1").innerText = "Invalid Result";
    } else {
        document.getElementById("result1").innerText = "The Total Interest is: " + result;
    }
}


