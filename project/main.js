import { sections, groupingContent, textLevelSemantics, edits, tabularData, forms, scripting } from "./src/html_data.json"

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


for (let key in sections) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    sectionsContent.appendChild(article);

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
        title.textContent = sections[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = sections[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = sections[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}


for (let key in groupingContent) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    groupingContentContent.appendChild(article);

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
        title.textContent = groupingContent[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = groupingContent[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = groupingContent[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}


for (let key in textLevelSemantics) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    textLevelSemanticsContent.appendChild(article);

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
        title.textContent = textLevelSemantics[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = textLevelSemantics[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = textLevelSemantics[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}


for (let key in edits) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    editsContent.appendChild(article);

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
        title.textContent = edits[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = edits[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = edits[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}


for (let key in tabularData) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    tabularDataContent.appendChild(article);

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
        title.textContent = tabularData[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = tabularData[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = tabularData[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}


for (let key in forms) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    formsContent.appendChild(article);

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
        title.textContent = forms[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = forms[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = forms[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}


for (let key in scripting) {
    const article = document.createElement("article");
    article.className = "content__item";
    article.id = key;

    const title = document.createElement("h3");
    title.className = "item__title--visual-hiden";
    title.textContent = key;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = key;
    button.className = "item__open-dialog-button";

    article.appendChild(title);
    article.appendChild(button);
    scriptingContent.appendChild(article);

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
        title.textContent = scripting[buttonKey]['title'];

        const contentTitle = document.createElement("h3");
        contentTitle.className = "content__title";
        contentTitle.textContent = "О теге:";
        const content = document.createElement("div");
        content.className = "content__inner";
        content.innerHTML = scripting[buttonKey]['content'];

        const exampleTitle = document.createElement("h3");
        exampleTitle.className = "example__title";
        exampleTitle.textContent = "Пример:"
        const exampleContent = document.createElement("div");
        exampleContent.className = "example__inner";
        exampleContent.innerHTML = scripting[buttonKey]["example"];

        titleSection.appendChild(title);
        contentSection.appendChild(contentTitle);
        contentSection.appendChild(content);
        exampleSection.appendChild(exampleTitle);
        exampleSection.appendChild(exampleContent);

        message.appendChild(titleSection);
        message.appendChild(contentSection);
        message.appendChild(exampleSection);

        blockClicked.appendChild(contentTemplateNode);
        dialog.showModal();
    });
}

closeButton.addEventListener('click', function () {
    dialog.close();
    message.innerHTML = '';
});