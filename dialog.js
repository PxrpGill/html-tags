const templateNode = document.querySelector("#messageTemplate");
const dialogTemplate = templateNode.content.cloneNode(true);
const dialog = dialogTemplate.querySelector("#dialogWindow");
const message = dialogTemplate.querySelector("p");

const fs = require('fs');
const readFile = fs.readFileSync('data_messages.json', 'utf8');
console.log(readFile);

function open_dialog(key, id) {
    const divBlock = document.querySelector(id);
    divBlock.append(dialogTemplate);
    message.innerHTML = message_sections[key];
    dialog.show();
}
