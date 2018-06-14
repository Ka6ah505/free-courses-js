/* Task 3 */

/* Put your code here */

var summa = parseInt(process.argv[2]) + parseInt(process.argv[3]);

function declination(number, titles) {  
	cases = [2, 0, 1, 1, 1, 2];  
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

var hours = Math.floor(summa / 3600); //определение часов
var minutes = Math.floor((summa%3600) / 60); // определение минут
var seconds = summa % 60; //определение секунд

var title1 = "";
var title2 = "";
var title3 = "";
if (hours > 0) {
	title1 = declination(hours, [' час ', ' часа ', ' часов ']);
}
if (minutes > 0) {
	title2 = declination(minutes, [' минута ', ' минуты ',' минут ']);
}
if (seconds > 0) {
	title3 = declination(seconds, [' секунда',' секунды',' секунд']);
}

console.log(hours+title1+minutes+title2+seconds+title3);
