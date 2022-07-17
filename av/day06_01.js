function convertDate(str) {
	if (str instanceof Date) {
		return str;
	}
	var dateArray = str.split('-');
	if (dateArray.length == 3) {

		return new Date((+dateArray[2]), (+dateArray[1]) - 1, (+dateArray[0]), 0, 0, 0, 0);
	}
	return "not a Date"
}

	 //0 -> Jan
     //1->Feb
//var s = convertDate(new Date());
//console.log(s);

console.log((new Date()).getTimezoneOffset())

s = convertDate('01-01-2022');
console.log(s +' ');