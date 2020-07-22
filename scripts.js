//Login Button Event Handler
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none'

    const trxArea = document.getElementById('trx-area')
    trxArea.style.display = 'block'
})


// Generating Amount from input field
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

//Summetion, changing balance/withdraw html, changing balance html
function updateSpanText(id, addAmountNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addAmountNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

// Deposit Event Handler
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function(){
    const addAmountNumber = getInputNumber('deposit-amount');

    updateSpanText('currentDeposit', addAmountNumber)
    updateSpanText('currentBalance', addAmountNumber)
    document.getElementById('deposit-amount').value = "";    
})


// Withdraw Event Handler
const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function(){
    const AmountNumber = getInputNumber('withdraw-amount');

    updateSpanText('currentWithdraw', AmountNumber)
    updateSpanText('currentBalance', -1 * AmountNumber)
    document.getElementById('deposit-amount').value = "";    
})


