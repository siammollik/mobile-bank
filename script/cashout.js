document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1--get the agent number & validate
    const cashoutNumber = getValueFromInput ("cashout-number");
    if(cashoutNumber.length !=11){
        alert("Invalid Number");
        return;
    }
    // 2--get the amount
    const cashoutAmount = getValueFromInput("cashout-Amount");

    // 3--get the current balance
    const currentBalance = getBalance();

    // 4--calculate new balance
    const newBalance =currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    // 5--get the pin and verify
    const pin = getValueFromInput("cashout-pin");
    if(pin === "3690"){
        alert("Cashout Successful");
        setBalance(newBalance);

        // 1--> set history container 
        const history = document.getElementById("history");
        // 2--> new div create
        const newHistory = document.createElement("div");
        // 3--> new div innerHTML add
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} Taka success to ${cashoutNumber}, at ${new Date()}
        </div>
        `
        // 4--> history container set new div append
        history.append(newHistory);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})


// document.getElementById('cashout-btn').addEventListener('click', function(){
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const agentNumber = cashoutNumberInput.value;
//     if(agentNumber.length !=11){
//         alert("Invalid Number");
//         return;
//     }
//     const cashoutAmountInput = document.getElementById('cashout-Amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     const balanceElement = document.getElementById('balance');
//     const currentBalance = balanceElement.innerText;
//     const newBalance = Number(currentBalance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === "3690"){
//         alert("CashOut Successful");
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         alert("Invalid Pin");
//         return;
//     }
// })






// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // 1--get the agent number & validate
//     const agentNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = agentNumberInput.value ;
//     console.log("Agent Number", cashoutNumber);
//     if(cashoutNumber.length !=11 ){
//         alert("Invalid Agent Number");
//         return;
//     }
//     // 2--get the amount
//     const cashoutAmountInput = document.getElementById('cashout-Amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log("Cashout Amount",cashoutAmount);
//     // 3--get the current balance
//     const balanceElement = document.getElementById('balance');
//     const currentBalance = balanceElement.innerText;
//     console.log("Current Balance", currentBalance);
//     // 4--calculate new balance
//     const newBalance = Number(currentBalance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Invalid amount");
//         return;
//     }

//     // 5--get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === '3690'){
//         // 5.1--true:: show an alert > set balance
//         alert("Cashout Successfull")
//         console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         // 5.2--false:: show an error > return
//         alert("Invalid Pin");
//         return;
//     }

// })