function rectangle() {
	let x = prompt("Введите перую координату: ");
	let y = prompt("Введите вторую координату: ");

	let a = x * 2;
	let b = y * 2;

	let p = (a + b) * 2;
	let s = a * b;

	alert("Периметр = " + p);
	alert("Площадь = " + s);
}