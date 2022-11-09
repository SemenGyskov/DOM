// 2
// function buttonClick(){
//     var input = document.getElementById('input');
//     input.value = '!!!';
// }
// 3
// function buttonClick(){
//     var input = document.getElementById('input');
//     alert(input.value)
// }
// 4
// function buttonClick() {
// 	var input = document.getElementById('input');
// 	var number = Number(input.value);
// 	var square = (number)*(number);
// 	alert(square);
// }

// 5
// function buttonClick(){
//     var input1 = document.getElementById('input1');
//     var input2 = document.getElementById('input2');
//     var input1Value = input1.value;
//     var input2Value = input2.value;
//     input1.value = input2Value;
//     input2.value = input1Value;
// }

// 6
// function buttonClick(elem){
//     elem.value = 'спасибо';
// }

// 7
// function buttonClick(){
//     var input = document.getElementById('input');
//     input.style.color='red'
// }

// 8
// блокировка
// function button1Click(){
//     var input = document.getElementById('input');
//     input.disabled = true;
// }
// // отблокировка
// function button2Click(){
//     var input = document.getElementById('input');
//     input.disabled = false;
// }






// 5
// function buttonClick(){
//  elem = document.getElementById('input')
//  alert(elem.value)
// }

// 6
// function buttonClick(){
//     elem = document.getElementById('input')
//     elem.value = 'Ой, я поменял свой текст!'
// }
// 7
// function buttonClick(){
//     elem = document.getElementById('photo')
//     elem.src ='assets/img/2.jpg'
// }

// 8
// function input(elem){
//     alert(elem.value)
// }


// 9
// function input(elem){
//     elem.value = 'ой, я поменял свой текст!'
// }

// 10
// function input(elem){
//     elem.value = 'ой, я поменял свой текст!'
// }
// function a(elem){
//     elem.value ='ой, а теперь ещё раз поменял!'
// }

// 11

// function buttonClick(elem){
//     elem.value = 'Ку-ку'
// }

// 12

// function input(elem){
//     elem.disabled = true;
//     elem.value ='О, теперь на меня болше не нажать!'
// }

// 13
// function over(elem){
//     elem.src='assets/img/1.jpg'
// }
// function out(elem){
//     elem.src='assets/img/2.jpg'
// }

// 14
// function buttonClick(){
//     var input = document.getElementById('input');
//     input.style.color='red'
// }

// 15
// function hide(){
//     elem = document.getElementById('test');
//     elem.style.display = 'none';
// }
// function show(){
//     elem = document.getElementById('test');
//     elem.style.display = 'inline-block';
// }


// 16

// function input(){
//     elem = document.getElementById('button');
//     elem.value = 'Ой, я поменял свой текст и css!';
//     elem.style.width = '300px';
//     elem.style.height = '50px';
//     elem.style.color = 'red';
//     elem.style.borderRadius = '10px';
// }

// 17


// function block(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, теперь на меня больше не нажать!';
//     block.disabled = true;
//     unblock.style.display = 'block';
// }
// function unblock(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, на меня снова можно нажимать!';
//     block.disabled = false;
//     unblock.style.display = 'none';
// }


// 18

// function go(elem){
// 			elem.value = parseInt(elem.value) + 1;
// 		}


// 19


// function go(){
//     elem = document.getElementById('test');
//     elem.value = 'Теперь я плаваю справа!';
//     elem.style.cssFloat = 'right';
// }



// 20


// function go(){
//     elem = document.getElementById('test');
//     elem.value = 'Мои css классы: '+elem.className;
// }


// 21

// function go(){
//     var test1 = document.getElementById('test1');
//     var test2 = document.getElementById('test2');
//     var tmp = test1.value;
//     test1.value = test2.value;
//     test2.value = tmp;
// }

// 22

// function go(){
// 	var test = document.getElementById('test');
// 	var value = test.value;
// 	var result = document.getElementById('result');
// 	result.value =  value*value;
// }

// 23

// function go(){
//     var test = document.getElementById('test');
//     var value = test.value;
//     if(!isNaN(value)){
//         var result = document.getElementById('result');
//         result.value =  value*value;
//     } else {
//         alert('Введено не число!')
//     }
// }

// 24

// function go(elem){
//     elem.disabled = true;
//     elem.style.cursor = 'not-allowed';
// }


// // 25

// function add(text){
//     var input = document.getElementById('input');
//     input.value = input.value + text;
// }


// 26

// function buttonClick(){
//     var elem = document.getElementById('elem')
//     elem.innerHTML = '!!!'
// }

// 27

// function buttonClick(){
//     var elem = document.getElementById('elem')
//     elem.outerHTML = '<b>' + elem.innerHTML + '</b>'
// }

// 28
// function func() {
// 	var elems = document.getElementsByTagName('p');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// 29

// function func() {
// 	var elems = document.getElementsByClassName('zzz');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// 30

// function func() {
// 	var elems = document.querySelectorAll('p.zzz');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// 31

// function go(){
// 	var test = document.getElementById('test');
// 	test.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
// 		}

// 32

		// function go(){
		// 	var test = document.getElementById('test');
		// 	test.outerHTML = '<h3>Абзац превратился в h3!</h3>';
		// }

// 33


// function go(){
// 	var test = document.getElementById('test');
// 	test.outerHTML = '<h3>'+test.innerHTML+'</h3>';
// }

// 34

	// function go(){
	// 		var input1 = +document.getElementById('input1').value;
	// 		var input2 = +document.getElementById('input2').value;
	// 		var result = document.getElementById('result');
	// 		result.innerHTML = input1 + input2;
	// 	}
	
// 35


// function go(){
// 	var elements = document.getElementsByTagName('p');
// 	for (var i = 0; i < elements.length; i++){
// 		elements[i].innerHTML = 'Ку-ку!';
// 	}
// }

// 36
// document.getElementById('btn').onclick = function(){
// let text = document.querySelectorAll('www')
// for(let i = 0; i < text.length; i ++){
// 	text[i].innerHTML = i + 1;
// }
// }

// 37
// function go(){
// 	var test = document.getElementById('test');
// 	alert(test.getAttribute('class'));
// 		}

// 38
		// function show(){
		// 	var test = document.getElementById('test');
		// 	alert(test.getAttribute('class'));
		// }
		// function del(){
		// 	var test = document.getElementById('test');
		// 	test.removeAttribute('class');
		// 	alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!')
		// }
// 39

		// function show(){
		// 	var test = document.getElementById('test');
		// 	alert(test.getAttribute('class'));
		// }
		// function del(){
		// 	var test = document.getElementById('test');
		// 	test.setAttribute('class', 'new-class');
		// 	alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
		// }
// 40

		// function go(elem){
		// 	var text = document.getElementById('text');
		// 	text.innerHTML = elem.value;
		// }
// 41

		// function go(){
		// 	var elements = document.getElementsByTagName('a');
		// 	for (var i = 0; i < elements.length; i++){
		// 		elements[i].innerHTML = elements[i].innerHTML+' ('+elements[i].getAttribute('href')+')';
		// 	}
		// }

// 42


		// function go(elem){
		// 	elem.disabled  =  true;
		// 	elem.value  =  'О, на меня нельзя больше нажать!';
		// 	var test = document.getElementById('test');
		// 	test.innerHTML = 'Привет, мир!';
		// 	test.style.color  =  'red';
		// }

// 43

		// function go(){
		// 	var elements = document.getElementsByTagName('p');
		// 	for (var i = 0; i < elements.length; i++){
		// 		elements[i].innerHTML = i;
		// 	}
		// }
// 44

		// function go(){
		// 	var elements = document.getElementsByTagName('p');
		// 	for (var i = 0; i < elements.length; i++){
		// 		elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
		// 	}
		// }

// 46

// var date = new Date();
// alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());

// // 47

// var months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// var date = new Date();
// var month = date.getMonth();
// alert(months[month]);

// 48

// var date = new Date();
// function getZero(num){
// 	if (num > 0 && num < 10) { 
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// 49

// var date = new Date();
// alert(date.getDay());

// 50

// var date = new Date();
// var day = date.getDay();

// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }

// alert(showDay(day));

// 51

// var date = new Date(2015, 0, 7); //месяц 0, так как их нумерация с нуля
// var day = date.getDay();

// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }

// alert(showDay(day));

// 52

// var date = new Date();
// var minute = Math.floor(date.getTime() / (1000 * 60));
// alert(minute);


// 53

// var time = Date.parse('1988-03-01T00:00:00'); 
// var date = new Date();
// var now = date.getTime(); 

// var result = now - time; 
// result = result / (1000 * 60 * 60); 
// alert(result);

// 54

// var date = new Date();
// var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
// var result = Math.floor((date.getTime() - now.getTime()) / 1000);
// alert(result);

// 56


		// function go(){
		// 	window.setInterval(timer, 1000);
		// }
		// function timer(){
		// 	var test = document.getElementById('test');
		// 	test.innerHTML = parseInt(test.innerHTML)+1;
		// }

// 57

		// function go(){
		// 	window.timerId = window.setInterval(timer, 500);
		// 	document.getElementById('go').disabled = true;
		// 	document.getElementById('stop').disabled = false;
		// }

		// function stop(){
		// 	window.clearInterval(window.timerId);
		// 	document.getElementById('go').disabled = false;
		// 	document.getElementById('stop').disabled = true;
		// }
		// function timer(){
		// 	var test = document.getElementById('test');
		// 	test.innerHTML = parseInt(test.innerHTML)+1;
		// }
// 58


		// function go(){
		// 	window.timerId = window.setInterval(timer, 500);
		// }
		// function timer(){
		// 	var clock = document.getElementById('clock');
		// 	var date = new Date();
		// 	clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
		// }
		// function addZero(num){
		// 	if(num <=9) return '0'+num;
		// 		else return num;
		// }
// // 59
// 		function go(){
// 			window.timerId = window.setInterval(timer, 300);
// 			document.getElementById('go').disabled = true;
// 		}
		
// 		function stop(){
// 			window.clearInterval(window.timerId);
// 		}
// 		function timer(){
// 			var test = document.getElementById('test');
// 			var number = parseInt(test.innerHTML)-1;
// 			test.innerHTML = number;
// 			if(number == 0) {
// 				stop();
// 				var timetStop = document.getElementById('stop');
// 				timetStop.innerHTML = 'Обратный отсчет завершен.';
// 			}
// 		}
