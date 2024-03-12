fetch('./main_page/data.json').then(response => response.json()).then(data => {
    const message_sections = data;
    const templateNode = document.getElementById("messageTemplate");
    const dialogTemplate = templateNode.content.cloneNode(true);
    const dialog = dialogTemplate.getElementById("dialogWindow");
    const message = dialogTemplate.getElementById("message");

    window.open_dialog = function (key, id) {
        const divBlock = document.querySelector(id);
        divBlock.append(dialogTemplate);
        message.innerHTML = message_sections[key];
        dialog.style.animation = "fadeIn 0.3s ease-in-out"
        dialog.showModal();
    }

    window.close_dialog = function() {
        dialog.style.animation = "fadeOut 0.3s ease-in-out";
        setTimeout(() => {
            dialog.close();
        }, 200);
    }
})
