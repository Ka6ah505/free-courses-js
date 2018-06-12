/* Task 2 */

/* Put your code here */

var a = process.argv[2].split("");
var b = process.argv[3].split("");

var test = function (mass1, mass2) {
	var l = mass1.length;
	for (var i = 1; i < l; i++) {
		mass1 = mass1.splice(1).concat(mass1);
		if (mass1.join()==mass2.join()) {
			return i;
		}
	};
	return -1;	
}

console.log(test(a, b));
