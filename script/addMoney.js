document.getElementById("add-money-btn").addEventListener('click', function(){
    // 1- get bank account
    const bankAccount =getValueFromInput("add-money-bank");
    if(bankAccount == "Select bank"){
        alert("Please select a bank")
        return;
    }

    // 2- get bank account number
    const accountNumber =getValueFromInput("add-money-number");
    if(accountNumber.length !=11){
        alert("Invalid account number");
        return;
    }

    // 3- get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);

    // 4- pin 
    const pin = getValueFromInput("add-money-pin");
    if(pin === "3690"){
        alert(`Add money success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);


        // 1--> set history container 
        const history = document.getElementById("history");
        // 2--> new div create
        const newHistory = document.createElement("div");
        // 3--> new div innerHTML add
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Add money success from ${bankAccount}, Account-Number ${accountNumber} at ${new Date()}
        </div>
        `
        // 4--> history container set new div append
        history.append(newHistory);
    }
    else{
        alert("Invalid pin");
        return;
    }
})