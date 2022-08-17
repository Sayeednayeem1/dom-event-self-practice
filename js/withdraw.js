// this is step-1:
document.getElementById('btn-withdraw').addEventListener("click", function(){

// this is step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldString);
    withdrawField.value = "";

// this is step-3:
    const presentWithdrawFieldBalance = document.getElementById('withdraw-total');
    const presentWithdrawFieldBalanceString = presentWithdrawFieldBalance.innerText;
    const presentWithdrawTotal = parseFloat(presentWithdrawFieldBalanceString);

// this is step-4:
    const newWithdrawTotal = presentWithdrawTotal + withdrawFieldAmount;
    presentWithdrawFieldBalance.innerText = newWithdrawTotal;

// this is step-5:

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceString = totalBalance.innerText;
    const currentTotalBalance = parseFloat(totalBalanceString);

    // this is step-6

    const newBalanceTotal = currentTotalBalance - withdrawFieldAmount;
    totalBalance.innerText = newBalanceTotal;














})