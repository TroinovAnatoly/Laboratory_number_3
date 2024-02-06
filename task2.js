function time() {
	let time = new Date();

	let hours = time.getHours();
	minutes = time.getMinutes();

	let minutes_of_day = minutes + (hours * 60);

	alert("Количество минут прошедших с начала дня = " + minutes_of_day);
}