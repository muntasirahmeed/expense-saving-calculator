function getInput(inputName) {
  const input = document.getElementById(inputName + "-input");
  let inputValue = input.value;
  let convertToNumber = parseFloat(inputValue);
  if (convertToNumber < 0) {
    let errorMsg1 = document.getElementById("error-msg2");
    errorMsg1.innerText = "Please Enter e Valid Number!";
  }
  if (typeof convertToNumber == "string") {
    let errorMsg1 = document.getElementById("error-msg2");
    errorMsg1.innerText = "Please Enter e Valid Number!";
  } else {
    return convertToNumber;
  }
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
    if (expenses > incomeInput) {
      let errorMsg = document.getElementById("error-msg");
      errorMsg.innerText = "Your expenses more then your income!";
    } else {
      let totalMoney = document.getElementById("total-expenses");
      totalMoney.innerText = expenses;
      let balance = document.getElementById("balance");
      balance.innerText = incomeInput - expenses;
    }
  });
//   save button
document.getElementById("save-button").addEventListener("click", function () {
  let totalExpensesAmount = totalExpenses();
  let incomeInput = getInput("income");
  let saveInput = getInput("save");
  let save = document.getElementById("saving-amount");
  let balance = document.getElementById("balance");
  let remainingBalance = document.getElementById("remaining-balance");

  let saveAmount = (incomeInput / 100) * saveInput;
  let totalbalance = incomeInput - totalExpensesAmount;
  let totalRemain = totalbalance - saveAmount;
  if (saveAmount > totalbalance) {
    let errorMsg = document.getElementById("error-msg3");
    errorMsg.innerText = "Your don't have enough money to save!";
  } else {
    save.innerText = saveAmount;
    balance.innerText = totalbalance;
    remainingBalance.innerText = totalRemain;
  }
});
