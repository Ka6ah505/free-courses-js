/* Task 2 */

/* Put your code here */

// неотрабатывает если 123456 и 654321 выдает -1

var a = process.argv[2].split("");
var b = process.argv[3].split("");

//сравнение двух массивов
var equals = function(mass1, mass2) {
	if (mass1.join()==mass2.join()) {
		return true;
	} else {
		return false;
	}
};

var calc = function(mass, answ) {
	/*var l = answ.length;
	for (var i = 1; i < l; i++) {

		let f = mass;
		f = f.splice(i).concat(f);
		console.log("f\t", f);
		if (equals(f, answ)) {
			return i;
		}
		console.log("mass\t", mass);
		let c = f.splice(-i*2).concat(f);
		console.log("c\t", c);
		if (equals(c, answ)) {
			return i;
		}
		mass = c.splice(i*2-1).concat(c);
		console.log("start\t", mass);
		console.log("------------------");
	}
	return -1;*/
}

var calc_r = function(mass, answ) {
	var l = mass.length;
	//console.log(mass);
	var temp = -1;
	// перестановка в перед
	for (var i = 1; i <= l; i++) {
		mass.push(mass.shift()); // push - добавляет в конец, shift - удаляет первый
		//console.log(mass);
		if (equals(mass, answ)) {
			temp = i;
		}
	}
	return temp;
};

var calc_l = function(mass, answ) {
	var l = mass.length;
	var temp = -1;
	// перестановка назад
	//console.log(mass);
	for (var i = 1; i <= l; i++) {
		mass.unshift(mass.pop());
		//console.log(mass);
		if (equals(mass, answ)) {
			//return i+1;
			temp = i;
		}
	}
	return temp;
};

// возможно для одинаковых массивов надо 0 выводить
var i = calc_r(a,b);
var j = calc_l(a,b);
//console.log(i,j);
if (i<j) {
	console.log(i);
} else if (i ==a.length && j==a.length) {
	console.log(-1);
} else {
	console.log(j)
}
