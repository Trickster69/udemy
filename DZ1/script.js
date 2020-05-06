let money = prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budjet: money,
  timeData: time,
  expenses: [],
  optionalExpenses: {},
  income: [],
  savings: false,
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");

appData.expenses[question1] = [question2]; //[] значит вычисляемое свойство
appData.expenses[question3] = [question4]; // имя свойства будет взято из переменной question3

//Смысл вычисляемого свойства прост: запись [question1] означает, что имя свойства необходимо взять из переменной question1.

alert(appData.budjet / 30);

//Добавил
