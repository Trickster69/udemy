let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

//Смысл вычисляемого свойства прост: запись [question1] означает, что имя свойства необходимо взять из переменной question1.

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

/*let i = 0;
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
*/
/*
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

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минмальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
  console.log("Cредний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
