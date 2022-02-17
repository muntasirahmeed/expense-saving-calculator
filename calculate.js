function getInput(inputName) {
  const input = document.getElementById(inputName + "-input");
  let inputValue = input.value;
  if ( typeof inputValue != "number") {
    let errorMsg = document.getElementById("error-msg");
    errorMsg.innerText = "Please Enter a Valid Number!";
  }
  else {
      let errorMsg = document.getElementById("error-msg");
      errorMsg.style.display ='block'
    }
  let convertToNumber = parseFloat(inputValue);
  return convertToNumber;
}
function totalExpenses() {
  let food = getInput("food");
  let rent = getInput("rent");
  let clothes = getInput("clothes");
  let totalExpenses = food + rent + clothes;
  return totalExpenses;
}
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    let incomeInput = getInput("income");
    let expenses = totalExpenses();
    let totalMoney = document.getElementById("total-expenses");
    totalMoney.innerText = expenses;
    let balance = document.getElementById("balance");
    balance.innerText = incomeInput - expenses;
  });
//   save button
document.getElementById("save-button").addEventListener("click", function () {
  let totalExpensesAmount = totalExpenses();
  let incomeInput = getInput("income");
  let saveInput = getInput("save");
  let save = document.getElementById("saving-amount");
  let saveAmount = (incomeInput / 100) * saveInput;
  save.innerText = saveAmount;
  let balance = document.getElementById("balance");
  let totalbalance = incomeInput - totalExpensesAmount;
  balance.innerText = totalbalance;
  let remainingBalance = document.getElementById("remaining-balance");
  let totalReamin = totalbalance - saveAmount;
  remainingBalance.innerText = totalReamin;
});
