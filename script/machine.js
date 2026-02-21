
// machine id -> input value
 function getValueFromInput(id){
    const input  = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
 }


//  machine -> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance", Number(balance));
    return Number(balance);
}

// machine value -> set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


// machine id -> hide all > show id
function showOnly(id){
    const addmoney = document.getElementById("addmoney");
    const cashout = document.getElementById("cashout");
    const transfer = document.getElementById("transfer-money");
    const getBonus = document.getElementById("get-bonus");
    const payBill = document.getElementById("pay-bill");
    const history = document.getElementById("history");
    
     // all hide
    addmoney.classList.add("hidden")
    cashout.classList.add("hidden")
    transfer.classList.add("hidden")
    getBonus.classList.add("hidden")
    payBill.classList.add("hidden")
    history.classList.add("hidden")

    
    // id only show
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")

}