import data from '/data/css_data.json';


const templateNode = document.querySelector(".message-template");
const contentTemplateNode = templateNode.content.cloneNode(true);
const dialog = contentTemplateNode.querySelector(".message-template__dialog");
const message = contentTemplateNode.querySelector(".dialog__message");
const closeButton = contentTemplateNode.querySelector(".dialog__close-button");


const content = document.querySelector(".main__content");


for (let key in data) {
    const article = document.createElement("article");
    article.className = "content__item";

    const articleTitle = document.createElement("h3");
    articleTitle.className = "item__title--visually-hidden";
    articleTitle.textContent = key;
    article.id = key;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "item__open-dialog-button";
    button.textContent = key;

    article.appendChild(articleTitle);
    article.appendChild(button);
    content.appendChild(article);

    button.addEventListener('click', function () {
        const buttonKey = button.textContent;
        const blockClicked = document.querySelector(`#${buttonKey}`);

        const titleSection = document.createElement("section");
        titleSection.className = "message__title";

        const contentSection = document.createElement("section");
        contentSection.className = "message__content";

        const exampleSection = document.createElement("section");
        exampleSection.className = "message__example";

        const title = document.createElement("h3");
        title.className = "title__inner";
        title.textContent = data[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О свойстве:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = data[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = data[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.classList.remove('close');
        dialog.showModal();
    });
}

closeButton.addEventListener('click', function () {
    dialog.classList.add('close');
    setTimeout(() => {
        dialog.close();
        message.innerHTML = '';
    }, 300);
});
