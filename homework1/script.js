// 1)

// 	Преобразуйте user в JSON и сохраните (выведите в console.log), 
// 	затем прочитайте JSON и сохраните в другую переменную (выведите в console.log)

	let user = {
	  name: "Василий Иванович",
	  age: 35
	};

let userJSON = JSON.stringify(user);
console.log(userJSON);

let userJSONparse = JSON.parse(userJSON);
console.log(userJSONparse);


// 	2) 
	
// 	напишем счетчик на localStorage - + / -
//         пусть в компоненте будет сам счетчик 
//         и будут кнопки имитирующие интерфейс localStorage (функция к каждой кнопке)
//         Все кнопки должны выводить в консоль сообщения. _Например
// 	setItem будет выводить в консоль что произошло сохранение и что именно сохранено._
	
//         setItem(key, value) – сохранить пару ключ/значение.
//         getItem(key) – получить данные по ключу key.
//         removeItem(key) – удалить данные с ключом key.
//         clear() – удалить всё.
//         key(index) – получить ключ на заданной позиции.
//         length – количество элементов в хранилище.


const keyInput = document.querySelector(".key"),
	  valueInput = document.querySelector(".value"),
	  numberInput = document.querySelector(".number");

const setButton = document.querySelector(".set-item"),
	  getValueButton = document.querySelector(".get-item"),
	  removeButton = document.querySelector(".remove-item"),
	  clearAllButton = document.querySelector(".clear-all"),
	  keyIndexButton = document.querySelector(".key-index"),
	  lengthButton = document.querySelector(".length");


const setToStorage = function(e) {
	if (keyInput.value !== '' && valueInput.value !== '') {
		localStorage.setItem(keyInput.value, valueInput.value)
		console.log(`В локальное хранилище сохранен ключ ${keyInput.value} со значением ${valueInput.value}`);
	} else console.log('Введите пару ключ-значение'); 
}

setButton.addEventListener('click', setToStorage);

const getValue = function(e) {
	if (keyInput.value !== '') {
		valueInput.value = localStorage.getItem(keyInput.value);
		console.log(`В хранилище найдено значение ${valueInput.value} для ключа ${keyInput.value}`)
	}
}

getValueButton.addEventListener('click', getValue);

removeButton.addEventListener('click', () => {
	localStorage.removeItem(keyInput.value);
	console.log(`Ключ ${keyInput.value} удален из хранилища`)});

clearAllButton.addEventListener('click', () => {
	localStorage.clear();
	console.log('Все ключи удалены из хранилища')});



const clearInput = function() {
	let clearValue = '';
	for (let i = 0; i < numberInput.value.length; i++) {
		if (!isNaN(Number(numberInput.value[i]))) {
			clearValue += numberInput.value[i];
		}	
	}
	numberInput.value = clearValue;
}

numberInput.addEventListener('input', clearInput);

const keyOfIndex = function(e) {
	if (keyInput.value == '' && valueInput.value == '' && numberInput.value !== '') {
		keyInput.value = localStorage.key(numberInput.value);
		console.log(`Найден ключ ${keyInput.value} под индексом ${numberInput.value}`)
	}
}

keyIndexButton.addEventListener('click', keyOfIndex);

const lengthOfStorage = function(e) {
	keyInput.value = '';
	valueInput.value = '';
	numberInput.value = localStorage.length;
	console.log(`Текущая длина хранилища ${localStorage.length}`)
}

lengthButton.addEventListener('click', lengthOfStorage);


// 	*
// 	напишите togoList используя localStorage + JSON
// 	функции todoList - добавление, удаление ( * необязательно - вычеркивание, редактирование)

// 	Должна быть кнопка **сохранить todo list**
// 	Данные должны храниться в браузере и при перезагрузки страницы 
// 	загружаться актуальные с последнего сохранения (инициализация всего списка)