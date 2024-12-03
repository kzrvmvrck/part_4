/*// let user = new Object();     Синтаксис ЭКОНСТРУКТОР ОБЪЕКТА
let user = {};              // Синтаксис ЛИЕРАЛА ОБЪЕКТА (обычно используют его)

user = {
    name : "Jack",
    age : 34,
    "likes birds" : true
}

alert(user.name);
alert(user.age);

user.isAdmin = true;

delete user.age;

alert(user["likes birds"]);

const constUser = {
    name: "kes"
}

alert(constUser.name);

constUser.name = "Fred";
alert(constUser.name);

constUser.age = 30;
alert(constUser.age);

// Имя свойства объекта может храниться в переменной!!!

let unknown = "color hair";
constUser[unknown] = "red";

alert(constUser[unknown]);

//  Можем запросить свойство от пользователя

let outKey = prompt("Data user", "Eyes color");
constUser[outKey] = prompt("Enter Data", "unnamed");

alert(`Вы ввели ${outKey} c данными ${constUser[outKey]}`);*/

//  Вычисляемое свойство
/*

let height = prompt("Enter Height", "height");

let bag = {
    [height]: 41,
}

alert( bag.height );

// Свойство из переменной

function makeUser(name, age) {
    return {
        name : name,
        age : age,
    }
}

let user = makeUser("John", 34);
alert( user.name );

// Краткая запись того же само го

function makeUser2 ( name, age ) {
    return {
        name,
        age,
    }
}

let user2 = makeUser("Jacky", 44);
alert( user2.name );

//  Проверка существования наличия свойства в объекте

let user3 = {};
alert( user3.name ); // Вернет undefined

alert(name in user2); // false
*/

/*
Напишите код, выполнив задание из каждого пункта отдельной строкой:

    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.*/

// let user = {};
// user.name = "John";
// user.surname = "Smith";
//
// user.name = "Pete";
// delete user.name;

/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

    Должно работать так:

    let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/

/*
function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

let user = {};

alert(isEmpty(user));*/
/*
let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130,
}

let sum = 0;

for(let key in salaries){
    sum += salaries[key];
}

alert(sum);*/

/*let menu = {
    width : 200,
    height : 300,
    title : "My menu",
}

function miltiplyNumeris(object) {
    for (let key in object) {
        if (typeof object[key] === "number") {
            object[key] *= 2;
        }
    }
}

miltiplyNumeris(menu);

for ( let key in menu) {
    alert(menu[key]);
}


// Методы объекта this

let user = {
    name : "Jack",
    age : 30,

    sayHi() {
        alert(`Hello ${user.name}!`);// Так лучше не делать, так как объект может быть скопирован в другую переменную
    }                                   // что приведет к не предсказуемым последствиям. Для того чтобы избежать этого
}                                       // необходимо делать приставку this. Тогда конкретно понятно, что мы обращаемся
                                        // к конкретному объекту.
user.sayHi();


let user2 = {
    name : "Jack",
    age : 30,

    sayHi() {
        alert(`Hello ${this.name}`);
    }
}

user2.sayHi();



/!*
let xUser = user;
user = null;
xUser.sayHi(); // Вернет ошибку
*!/

let yUser = user2;
user2 = null;
yUser.sayHi();  // А вот так все работает, так как мы в переменную yUser скопировали user2. Избегая тем самым? того
                // при изменении user2, мы не меняем yUser


// При помощи слова this в любой функции, мы можем обратиться к любому свойству любого объекта и выполнить ее

let randomObject = {
    cargo : "Coca-Cola",
    master : "Santa",
    car : "Deer",
    age : "Infinity",
}

function sayHelloToSanta() {
    alert(this.master);
}

function getCargo() {
    alert(this.cargo);
}


randomObject.sayHello = sayHelloToSanta;
randomObject.getCargo = getCargo;

randomObject.getCargo();
randomObject.sayHello();


// Задания


let calculator = {

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum(Object) {
        return this.a + this.b;

    },

    mul(Object) {
        return this.a * this.b;
    },
}*/
/*

let ladder = {
    step : 0,
    up() {
        this.step ++;   // что-то делает со свойством (+1)
        return this;    // this возвращает сам объект, а не конкретное свойство объекта (this.step)
    },

    down() {
        this.step --;
        return this;
    },

    showStep: function() {
        alert( this.step );
        return this;
    }
}

ladder.up().up().down().showStep().down().showStep();


// В прошлый раз мы создали ОБЪЕТ, тут же мы создаем функцию-конструктор
function Calculator() {

    this.read = function () {
        this.a = +prompt("a", 0);
        this.b = +prompt("b", 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };

}

let calculator = new Calculator();

*/

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.newNumber = +prompt("Enter number", 0);
        this.value += this.newNumber;
        return this;
    }
}

let accum = new Accumulator(1);

accum.read();
accum.read();

alert(accum.value);


// Решение

function Accum(start) {
    this.start = start;

    this.read = function () {
        this.start += +prompt("Enter value: ", 0)
    };
}

let accum2 = new Accum(1);

accum2.read();
accum2.read();

alert(accum2.value);


























