import data from './src/html_data.json'

const message_sections = data;
const templateNode = document.getElementById("messageTemplate");
const dialogTemplate = templateNode.content.cloneNode(true);
const dialog = dialogTemplate.getElementById("dialogWindow");
const message = dialogTemplate.getElementById("message");
const closeButton = dialogTemplate.querySelector(".close-button");

window.open_dialog = function (key, id) {
    const divBlock = document.querySelector(id);
    divBlock.append(dialogTemplate);
    message.innerHTML = message_sections[key];
    dialog.classList.remove('close');
    dialog.showModal();
}

closeButton.addEventListener('click', function() {
    dialog.classList.add('close');
    setTimeout(() => {
        dialog.close(); 
    }, 300);
});


