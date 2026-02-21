
document.getElementById("get-bonus-btn").addEventListener('click', function(){

    // **** bonus money
    const bonus = "590";
    const newBalance = getBalance() + Number(bonus);
    // 1-> get coupon number
    const couponNumber = getValueFromInput("coupon-number");
    if(couponNumber === "15985119"){
        alert("Added Bonus Money");
        setBalance(newBalance);
        return;
    }
    else{
        alert("Invalid Coupon Number");
        return;
    }
})
