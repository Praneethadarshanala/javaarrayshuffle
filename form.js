// Get form elements
const surveyForm = document.getElementById('survey-form');
const resetButton = document.getElementById('reset-button');
const submitButton = document.getElementById('submit-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const submittedData = document.getElementById('submitted-data');

// Add a click event listener to the Reset button
resetButton.addEventListener('click', () => {
    surveyForm.reset();
});

// Add a click event listener to the Submit button
submitButton.addEventListener('click', () => {
    if (surveyForm.checkValidity()) {
        // Form is valid, display a popup with submitted data
        const formData = new FormData(surveyForm);
        let popupContent = '<ul>';
        for (const pair of formData.entries()) {
            popupContent += `<li>${pair[0]}: ${pair[1]}</li>`;
        }
        popupContent += '</ul>';
        submittedData.innerHTML = popupContent;
        popup.style.display = 'block';
    } else {
        // Form is invalid, display an alert
        alert('Please fill out all required fields.');
    }
});

// Add a click event listener to close the popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    surveyForm.reset();
});
