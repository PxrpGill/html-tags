import data from "./src/html_data.json"

const sectionsContent = document.querySelector(".sections__content");
const groupingContentContent = document.querySelector(".grouping-content__content");
const textLevelSemanticsContent = document.querySelector(".text-level-semantics__content");
const editsContent = document.querySelector(".edits__content");
const tabularDataContent = document.querySelector(".tabular-data__content");
const formsContent = document.querySelector(".forms__content");
const scriptingContent = document.querySelector(".scripting__content");

const templateNode = document.querySelector(".message-template");
const contentTemplateNode = templateNode.content.cloneNode(true);
const dialog = contentTemplateNode.querySelector(".message-template__dialog");
const message = contentTemplateNode.querySelector(".dialog__message");
const closeButton = contentTemplateNode.querySelector(".dialog__close-button");


for (let nameDataSection in data) {
    for (let keyItem in data[nameDataSection]) {
        const article = document.createElement("article");
        article.className = "content__item";
        article.id = keyItem;

        const title = document.createElement("h3");
        title.className = "item__title--visual-hiden";
        title.textContent = keyItem;

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = keyItem;
        button.className = "item__open-dialog-button";

        article.appendChild(title);
        article.appendChild(button);

        switch (nameDataSection) {
            case "sections":
                sectionsContent.appendChild(article);
                break;
            case "groupingContent":
                groupingContentContent.appendChild(article);
                break;
            case "textLevelSemantics":
                textLevelSemanticsContent.appendChild(article);
                break;
            case "edits":
                editsContent.appendChild(article);
                break;
            case "tabularData":
                tabularDataContent.appendChild(article);
                break;
            case "forms":
                formsContent.appendChild(article);
                break;
            case "scripting":
                scriptingContent.appendChild(article);
                break;
            default:
                console.log("Произошла ошибка: такой секции не существует");
        }

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
            title.textContent = data[nameDataSection][keyItem]['title'];

            const contentTitle = document.createElement("h3");
            contentTitle.className = "content__title";
            contentTitle.textContent = "О теге:";
            const content = document.createElement("div");
            content.className = "content__inner";
            content.innerHTML = data[nameDataSection][keyItem]['content'];

            const exampleTitle = document.createElement("h3");
            exampleTitle.className = "example__title";
            exampleTitle.textContent = "Пример:"
            const exampleContent = document.createElement("div");
            exampleContent.className = "example__inner";
            exampleContent.innerHTML = data[nameDataSection][keyItem]["example"];

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
}

closeButton.addEventListener('click', function () {
    dialog.classList.add('close');
    setTimeout(() => {
        dialog.close();
        message.innerHTML = '';
    }, 300);
});