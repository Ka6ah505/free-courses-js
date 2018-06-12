/* Task 2 */

/* Put your code here */

var a = process.argv[2].split("");
var b = process.argv[3].split("");

var equals = function(mass1, mass2) {
	if (mass1.join()==mass2.join()) {
		return true;
	} else {
		return false;
	}
}

var calc = function(mass, answ) {
	var l = answ.length;
	for (var i = 1; i < l; i++) {

		let f = mass;
		f = f.splice(i).concat(f);
		if (equals(f, answ)) {
			return i;
		}

		let c = f.splice(-i*2).concat(f);
		if (equals(c, answ)) {
			return i;
		}

		mass = c.splice(i*2-1).concat(c);
	}
	return -1;
}

console.log(calc(a,b));
