/* Task 3 */

/* Put your code here */

var summa = parseInt(process.argv[2]) + parseInt(process.argv[3]);

var hours = Math.floor(summa / 3600); //определение часов
var minutes = Math.floor((summa%3600) / 60); // определение минут
var seconds = summa % 60;
console.log(hours+" часов "+minutes+" минут "+seconds+" секунд");
