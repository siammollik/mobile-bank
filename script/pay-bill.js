document.getElementById("pay-bill-btn").addEventListener('click', function(){
    // 1 -> get select 
    const payBillBack = getValueFromInput("pay-bill-back");
    if(payBillBack == "Select Back"){
        alert("Please Select A Purpose");
        return;
    }

    // 2-> get biller account number
    const payNumber = getValueFromInput("pay-bill-number");
    if(payNumber.length != 11){
        alert("Invalid Pay-Bill Number")
        return;
    }

    // 3-> get amount
    const payAmount = getValueFromInput("pay-bill-amount");

    // 4-> current balance & new Balance
    const currentBalance = getBalance()
    const newBalance = currentBalance - Number(payAmount);

    // 5-> pin
     const pin = getValueFromInput("pay-bill-pin");
    if(pin === "3690"){
        alert("Pay Successful");
        setBalance(newBalance);
    }
    else{
        alert("Invalid pin");
        return;
    }
})