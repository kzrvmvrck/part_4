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

let menu = {
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
