import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    feedbackFormInput: document.querySelector('.feedback-form input'),
    feedbackFormTextArea: document.querySelector('.feedback-form textarea'),
}

const formData = {};

getDataFromLocalStorage();

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle((event) => {
        formData[event.target.name] = event.target.value;
        storeDataToLocalStorage(formData);
    }, 500)
);

// функція відправки форми
function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
}

// функція для зберігання даних в локальне сховище
function storeDataToLocalStorage(data) {
    const dataForLocalStorage = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, dataForLocalStorage);
}

// функція повертає дані з локального сховища
function getDataFromLocalStorage() {
    const storedData =  localStorage.getItem(STORAGE_KEY);

    if (storedData) {
        try {
            const tempObject = JSON.parse(storedData);
            formData[refs.feedbackFormInput.name] = tempObject[refs.feedbackFormInput.name];
            formData[refs.feedbackFormTextArea.name] = tempObject[refs.feedbackFormTextArea.name];
            refs.feedbackFormInput.value = tempObject[refs.feedbackFormInput.name];
            refs.feedbackFormTextArea.value = tempObject[refs.feedbackFormTextArea.name];
        } catch(error) {
            console.log(`Error: ${error.name}\n Error detail: ${error.message}`);
        }
    }
}