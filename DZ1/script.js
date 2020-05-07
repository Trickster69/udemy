let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) { //isNan - если не число, если пустая строка, если отмена(null)
    money = +prompt("Ваш бюджет на месяц", "");
  }
}
start();

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

let optionalExpenses = {

};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
    } else {
      alert("Данные введены некорректно");
    }
  }
}
chooseExpenses();

/*//другие виды циклов

let i = 0;
while(i<2){
  let a = prompt("Введите обязательную статью расходов в этом месяце");
  let b = prompt("Во сколько обойдется?");
  i++;

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    appData.expenses[a] = b;
  } else {
    alert("Данные введены некорректно");
  }
}
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце");
  let b = prompt("Во сколько обойдется?");
  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    appData.expenses[a] = b;
  } else {
    alert("Данные введены некорректно");
  }
  i++;
} while (i < 2);
*/

function detectDayBudget() {
  appData.moneyPerDay = (appData.budjet / 30).toFixed(); //округляем
  alert("Ежедневный бюджет " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минмальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
    console.log("Cредний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();


function checkSaving() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма наколпнеий?"),
      percent = +prompt("Под какой %?");

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
  }
}
checkSaving();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    optionalExpenses[i] = prompt("Статья необязательных расходов?");
  }
}
chooseOptExpenses();