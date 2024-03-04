import data from './data.json' assert {type: "json"};

const message_sections = data;
const templateNode = document.querySelector("#messageTemplate");
const dialogTemplate = templateNode.content.cloneNode(true);
const dialog = dialogTemplate.querySelector("#dialogWindow");
const message = dialogTemplate.querySelector("p");

window.open_dialog = function (key, id) {
    const divBlock = document.querySelector(id);
    divBlock.append(dialogTemplate);
    message.innerHTML = message_sections[key];
    dialog.showModal();
}
