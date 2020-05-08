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
  chooseExpenses: function () {
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
        i = i - 1;
      }
    }
  },

  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budjet / 30).toFixed(); //округляем
    alert("Ежедневный бюджет " + appData.moneyPerDay);
  },

  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минмальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
      console.log("Cредний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },

  checkSaving: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма наколпнеий?"),
        percent = +prompt("Под какой %?");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
    }
  },

  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
  },

  chooseIncome: function () {
    let items = prompt("ЧТо принесет доп доход? (через запятую)");
    if (typeof (items) != "string" || items == "" || typeof (items) == null) {
      console.log("Проверь правильность формата данных");
    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt("Не забыли ничего????", ""));
      appData.income.sort();
    }

    appData.income.forEach(function (itemmsassive, i) {
      console.log((i + 1) + " - " + itemmsassive);
    });
  }
};

let pereborFunc = function () {
  for (let key in appData) {
    console.log(key + " - " + appData[key]);
  }
};

let optionalExpenses = {};


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