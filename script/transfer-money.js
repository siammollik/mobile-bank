document.getElementById('transfer-btn').addEventListener('click', function(){
    // 1--get the transfer number & validate
    const transferNumber = getValueFromInput("transfer-number");
    if(transferNumber.length != 11){
        alert("Invalid Number");
        return;
    }

    // get amount
    const transferAmount = getValueFromInput("transfer-Amount");

    // 3--get the current balance
    const currentBalance = getBalance();

     // 4--calculate new balance
     const newBalance = currentBalance - Number(transferAmount);

     // 5--get the pin and verify
     const pin = getValueFromInput("transfer-pin");
       if(pin === "3690"){
           alert("Transfer Money Successful");
           setBalance(newBalance);
       }
       else{
           alert("Invalid Pin");
           return;
       }
})