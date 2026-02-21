document.getElementById('login-btn').addEventListener('click',function(){
    // get the mobile number
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    // console.log(contactNumber)

    // get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    // console.log(pin)

    // match pin & mobile number
    if(contactNumber == "01815985119" && pin == "3690"){
        // alert : login
        alert("login successful");
        window.location.assign("home.html")
    }
    else{
        alert("login failed");
        return ; 
    }
})