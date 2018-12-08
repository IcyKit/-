var budget = prompt("Ваш бюджет на месяц?", '');
console.log(budget);

var date = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log(date);

let appData = {
    budget: budget,
    expenses: {},
    income: [],
    timeData: date,
    savings: false,
    optionalExpenses: {}
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

alert(appData.budget / 30);