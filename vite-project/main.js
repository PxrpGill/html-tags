import data from './src/assets/data.json';

const message_sections = data;
const templateNode = document.getElementById("messageTemplate");
const dialogTemplate = templateNode.content.cloneNode(true);
const dialog = dialogTemplate.getElementById("dialogWindow");
const message = dialogTemplate.getElementById("message");

window.open_dialog = function (key, id) {
    const divBlock = document.querySelector(id);
    divBlock.append(dialogTemplate);
    message.innerHTML = message_sections[key];
    dialog.showModal();
}

