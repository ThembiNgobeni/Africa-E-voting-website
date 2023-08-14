const inputField = document.querySelector('input[type="text"]');
const chatbox = document.querySelector('.msg-row');

inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const userMessage = inputField.value;

        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('msg-text', 'user-message');
        userMessageDiv.innerHTML = `
            <h2>User</h2>
            <p>${userMessage}</p>
        `;
        chatbox.appendChild(userMessageDiv);

        const botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('msg-text', 'bot-message');
        botResponseDiv.innerHTML = `
            <h2>Chatbot</h2>
            <p>Thank you for your message. Our support team will assist you shortly.</p>
        `;
        chatbox.appendChild(botResponseDiv);

        inputField.value = ''; 
    }
});