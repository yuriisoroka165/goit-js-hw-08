import throttle from "lodash.throttle";

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
formInput.addEventListener('input', throttle(onInputChange, 500));
formTextArea.addEventListener('input', throttle(onTextAreaChange, 500));

// функція відправки форми
function onFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    data.email = '';
    data.message = '';
    storeDataToLocalStorage(data);
    event.target.reset();
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