// ПРОШУ ДАТИ ПІДКАЗКУ:
// В ЗАВДАННІ ПИШЕ ТАК: Відстежуй на формі подію input
// Я НЕ ЗНАЙШОВ ЯК ПРАВИЛЬНО ВІДСТУЖУВАТИ INPUT ДЛЯ ВСІЄЇ ФОРМИ І ОТРИМУВАТИ ДАНІ З КОНКРЕТНОГО ПОЛЯ ЯКЕ ЗМІНЮЄТЬСЯ В МОМЕНТ ЧАСУ
// ТОМУ Я СЛУХАЮ КОЖНЕ ПОЛЕ ОКРЕМО

const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formTextArea = document.querySelector('.feedback-form textarea');

// початковий об'єкт
const data = {
    email: '',
    message: '',
}

// ця змінна зберігає завантажені дані з локального сховища
const dataFromLocalStorage = getDataFromLocalStorage();

// перевірка наявності даних та парсинг даних в новий об'єкт
if (dataFromLocalStorage) {
    try {
        const loadedData = JSON.parse(dataFromLocalStorage);
        data.email = loadedData["email"];
        data.message = loadedData["message"];
    } catch (error) {
        console.log(`Error: ${error.name}\n Error detail: ${error.message}`);
    }
}

// вставка даних у відповідні поля
formInput.value = data.email;
formTextArea.value = data.message;

feedbackForm.addEventListener("submit", onFormSubmit);
formInput.addEventListener('input', throttle((event) => {
        onInputChange(event)
    }, 500)
);
formTextArea.addEventListener('input', throttle((event) => {
        onTextAreaChange(event)
    }, 500)
);

// функція відправки форми
function onFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    data.email = '';
    data.message = '';
    storeDataToLocalStorage(data);
    formInput.value = data.email;
    formTextArea.value = data.message;
}

// функція при зміні input
function onInputChange(event) {
    data.email = event.target.value; 
    storeDataToLocalStorage(data);
}

// функція при зміні textarea
function onTextAreaChange(event) {
    data.message = event.target.value;
    storeDataToLocalStorage(data);
}

// функція для зберігання даних в локальне сховище
function storeDataToLocalStorage(data) {
    const dataForLocalStorage = JSON.stringify(data);
    localStorage.setItem('feedback-form-state', dataForLocalStorage);
}

// функція поаертає дані з локального сховища
function getDataFromLocalStorage() {
    return localStorage.getItem('feedback-form-state');
}