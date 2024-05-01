import data from './src/css_data.json';


const wrapper = document.querySelector(".wrapper");

const templateNode = document.getElementById("messageTemplate");
const dialogTemplate = templateNode.content.cloneNode(true);
const dialog = dialogTemplate.getElementById("dialogWindow");
const message = dialogTemplate.getElementById("message");
const closeButton = dialogTemplate.querySelector(".close-button");


for (let key in data) {
    const idBlock = key + "Block";

    const div = document.createElement("div");
    div.id = idBlock;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "card-button";
    button.onclick = function() {
        div.appendChild(dialogTemplate);
        message.innerHTML = data[key];
        dialog.classList.remove('close');
        dialog.showModal(); 
    };
    button.textContent = key;

    div.appendChild(button);
    wrapper.appendChild(div);
}

closeButton.addEventListener('click', function() {
    dialog.classList.add('close');
    setTimeout(() => {
        dialog.close(); 
    }, 300);
});
