function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value
    interestRateValue = document.getElementById("interest").value
    MonthsToPayValue = document.getElementById("month").value

    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;
    monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}