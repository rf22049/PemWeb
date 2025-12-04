const contactForm = document.getElementById('contact-form');

const fields = [
    { id: 'name', label: 'Nama' },
    { id: 'email', label: 'Email' },
    { id: 'message', label: 'Pesan' }
];

function clearAllErrors() {
    document.getElementById('success-message').innerHTML = ''; 
    
    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(`error-${field.id}`);
        
        inputElement.style.borderColor = '#ccc'; 
        
        errorElement.innerHTML = '';
    });
}


function displayError(fieldId, message) {
    const inputElement = document.getElementById(fieldId);
    const errorElement = document.getElementById(`error-${fieldId}`);

    errorElement.innerHTML = `<p class="error-text-content">${message}</p>`; 
    
    inputElement.style.borderColor = '#ff0000';
}


function handleFormSubmission(event) {
    event.preventDefault(); 
    
    clearAllErrors(); 
    
    let isFormValid = true;

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const value = inputElement.value.trim(); 

        if (value === '') {
            isFormValid = false;
            displayError(field.id, `Kolom ${field.label} wajib diisi.`);
        }
        
        if (field.id === 'email' && value !== '' && !value.includes('@')) {
            isFormValid = false;
            displayError(field.id, `Format ${field.label} tidak valid.`);
        }
    });

    if (isFormValid) {
        
        const successMessageElement = document.getElementById('success-message');
        successMessageElement.innerHTML = '<p class="success-message-content">Pesan berhasil dikirim!</p>';

        contactForm.reset(); 
        
        console.log("Data berhasil dikirim:", {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        });
    }
}

contactForm.addEventListener('submit', handleFormSubmission);