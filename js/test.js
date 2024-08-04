//document.write("Javascript says hello")
console.log("Hello guys")
//console.error("Hello guys")
 
//var num_1 = 3 ;
//var num_2 = 7;

//console.log("Результат:" + (num_1 / num_2) );
//var num_3 = 5; 
//num_3 ++;
//console.log ("Результат:" + num_3);

//console.log ("Math:" +Math.PI);


//var number = 15;
//var HasHouse = true;

//if ( number != 15 && HasHouse == true) {
//console.log ("Ok")
//} 
//else {
//console.log ("Sho takoe?")
//}


//переменные
//var stroka = "word";
//switch(stroka) {
//    case "4": console.log("Переменная со значением 4");
//    break;
 //   case "45": console.log("Переменная со значением 45");
//    break;
 //   case "word": console.log("Это сука word");
 //   break;
//}



//массивы

//var arr =[5, true, "sho takoe?", 5.7];
//console.log (arr);

//var matrix = [[4,6,8],[true, "sho takoe?", 5.7],[0, -100]];
//matrix [1] [0] = 90;
//console.log (matrix);



//циклы

//for (var i = 100; i >5; i /=2) {
//    console.log(i);
//}

// var j = 1000;
// while (j >= 100) {
//     console.log(j);
//     j -= 100;
// }

// varishascar = true;
// while(isHasCar) {

// }

// var x = 100;
// do {
//     console.log(x);
//     x++;
// } while (x < 10);


// for(var i = 10; i<=20; i+=2) {
//     if (i%2 ==0)
//         continue;

//     console.log(i);
// }



// var arr = [5,7,3,8,9, "sho takoe?"];

// for (var i=0; i< arr.length; i++) {
//     console.log("Элемент " + (i+1) + ": " + arr[i]);
// }




//всплывающие окна

//alert("Хорошего дня!");

// var data = confirm ("Ты дурак?");
// if (data) {
//     alert ("Надо учиться!");
// }


// var data = prompt ("Скажи сколько тебе лет");
// console.log (data);

// var person = null;
// if (confirm("Вы точно уверены?")) {
//     person = prompt ("What's your name?");
//     alert("Hello " + person);

// } else {
//     alert ("No name provided");
// }



// функции

// function info(word) {

//     console.log(word + "!");
// }

// function summa (a, b){
//     var res = a + b;
//     info (res);
// }

// summa(5 , 7);


// function summa (arr) {
//     var sum = 0;

//     for (var i = 0; i < arr.length; i++) 
//         sum += arr [i];
       
//     return sum;
//     }

// var array = [6, 8, 1];
// var array_2 = [6, 8, 1, 7];

// var res = summa(array);
// console.log("Result: " + res);
// summa(array);
// summa(array_2);


// var num = 20;

// function info() {
//     var num = 10;
//     console.log(num);
// }

// info();

// console.log(num);




// События

// var counter = 0;

// function onClickButton (el) {
//     counter++;
//     el.innerHTML = "Вы нажали на кнопку: " + counter;
//     el.style.background = "red";
//     console.log(el.onclick);
// }

// function onInput(el) {
//     if (el.value == "Hello");
//         alert ("И тебе привет!");

//     console.log(el.value);
// }






// var text = document.getElementById('text');
// console.log(text.id);

// text.style.color= "red";
// text.style.backgroundColor = "green";



// var spans = document.getElementsByClassName ('simpletext');
// for (var i = 0; i< spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }



function checkForm(el) {

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var error = ""

    if (name == "" || pass == "" || state == "")
        error = "Заполни все поля!" ;
    else if (name.length <= 2 || name.length > 50)
        error = "Введи имя от 2 до 50 символов" ;
    else if (pass != repass)
        error = "Пароли должны совпадать";
    else if (pass.split ("&").length >1)
        error = "Некорректний пароль";


    if (error != "") {
        document.getElementById('error').innerHTML = error;

        return false;
    } else {
        alert ("Все данные корректно заполнены");
        window.location = 'https://keeplinker.com'
        return false;
    }


    return false;
}



// таймеры и интервалы

// setInterval(my_func, 1000);

//  var counter=0;

//  var id = setInterval (my_func, 1000);
// function my_func() {
//     counter++;
//     console.log("Counter: " + counter);

//     if (counter ==3)
//         clearInterval(id);
// }

// setInterval(function(){
//     counter++;
//     console.log("Прошло секунд: " + counter)
// }, 1000);


// setTimeout(function()  {
//     console.log("Timer is working");
// }, 2000);




// создание обьектов. Встроенные функции.



// var date = new Date();

// // console.log(date.getFullYear());
// // console.log(date.getMonth() +1);
// // console.log(date.getDate() );

// console.log ("Время: " + date.getHours() + ":" + date.getMinutes());



// var arr = [5,7,9,6, 53,-2,45, 859, -4];
// var stroka = arr.reverse().join(", ");
// // console.log(arr.sort());

// console.log(stroka.split (", "));




// class Person {
//     constructor (name, age, happiness) {
//         this.name = name;
//         this.age = age;
//         this.happiness = happiness;
//     }
// }

//     function .info() {
        
//     } {
        
//     }

// var alex = new Person ("Alex", 32, true);
// var bob = new Person ("Bob", 33, false);
// console.log("Имя: ", alex.name, "Возраст: ", alex.age, "Счастлив ли: ", alex.happiness);
// console.log(bob.name);