// this is step-1:
document.getElementById('btn-deposit').addEventListener("click", function(){
    
    // this is step-2:
    const depositField = document.getElementById('deposit-field');
    const depositFieldStrign = depositField.value;
    const newDepositAmount = parseFloat(depositFieldStrign);
    depositField.value = "";
    

    // this is step-3:
    const currentDepositAmount  = document.getElementById('deposit-total');
    const currentDepositAmountString = currentDepositAmount.innerText;
    const previousDepositAmount = parseFloat(currentDepositAmountString);
    

    // this is step-4:
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    currentDepositAmount.innerText = newDepositTotal;

    // this is step-5:
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceString = totalBalance.innerText;
    const currentTotalBalance = parseFloat(totalBalanceString);

    // this is step-6

    const newBalanceTotal = currentTotalBalance + newDepositAmount;
    totalBalance.innerText = newBalanceTotal;








})