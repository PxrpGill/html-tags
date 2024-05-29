import data from '/data/html_data.json';

const templateNode = document.querySelector('.message-template');
const contentTemplateNode = templateNode.content.cloneNode(true);
const dialog = contentTemplateNode.querySelector('.message-template__dialog');
const message = contentTemplateNode.querySelector('.dialog__message');
const closeButton = contentTemplateNode.querySelector('.dialog__close-button');

const sectionContent = document.querySelector('.sections__body');
const groupingContentContent = document.querySelector('.grouping-content__body');
const textLevelSemanticsContent = document.querySelector('.text-level-semantics__body');
const editsContent = document.querySelector('.edits__body');
const tabularDataContent = document.querySelector('.tabular-data__body');
const formsContent = document.querySelector('.forms__body');
const scriptingContent = document.querySelector('.scripting__body');

const openSectionButton = document.querySelectorAll('.head__button-show-section');

let state = {
    sectionContentIsClose: true,
    groupingContentContentIsClose: true,
    textLevelSemanticsContentIsClose: true,
    editsContentIsClose: true,
    tabularDataContentIsClose: true,
    formsContentIsClose: true,
    scriptingContentIsClose: true
};

let dialogTimerId;
let sectionTimerId;

closeButton.addEventListener('click', function() {
    dialog.classList.add('close');

    if (dialogTimerId) {
        clearTimeout(dialogTimerId);
    }

    dialogTimerId = setTimeout(() => {
        dialog.close();
        message.innerHTML = '';
        dialogTimerId = null;
    }, 280);
});

function openContent(section) {
    const sectionClassName = section.className;
    section.classList.add("animation-open");
    for (let element in data[sectionClassName]) {
        const htmlElement = `
            <article class="body__item" key="${element}">
                <h3 class="item__title--visually-hidden">
                    ${element}
                </h3>
                <button class="item__open-dialog-button" type="button">
                    ${element}
                </button>
            </article>
        `
        section.insertAdjacentHTML('beforeend', htmlElement);
    }
    const openButtons = section.querySelectorAll('.item__open-dialog-button');
    openButtons.forEach(button => {
        button.addEventListener('click', function () {
            const messageSections = `
                <section class="message__title">
                    <h4 class="title__message-inner">
                        Тег: ${button.innerText}
                    </h4>
                </section>
                <section class="message__content">
                    <h4 class="content__title">О теге:</h4>
                    ${data[sectionClassName][button.innerText]['content']}
                </section>
                <section class="message__example">
                    <h4 class="example__title">Пример:</h4>
                    <div class="example__inner">
                        ${data[sectionClassName][button.innerText]['example']}
                    </div>
                </section>
            `;
            message.insertAdjacentHTML('beforeend', messageSections);
            document.body.appendChild(contentTemplateNode);
            dialog.classList.remove('close');
            dialog.showModal();
        })
    })
}

function closeContent(section) {
    section.classList.remove('animation-open');
    section.classList.add('animation-close');

    if (sectionTimerId) {
        clearTimeout(sectionTimerId);
    }

    sectionTimerId = setTimeout(() => {
        section.innerHTML = '';
        section.classList.remove('animation-close');
        sectionTimerId = null;
    }, 500);
}

function isOpenOrCloseContent(section, stateKey) {
    if (state[stateKey]) {
        state[stateKey] = false;
        openContent(section);
    } else {
        state[stateKey] = true;
        closeContent(section);
    }
}

openSectionButton.forEach(button => {
    button.addEventListener('click', function () {
        let buttonText = button.innerText;
        switch (buttonText) {
            case 'Секции':
                isOpenOrCloseContent(
                    sectionContent,
                    'sectionContentIsClose'
                );
                break;
            case 'Группировка контента':
                isOpenOrCloseContent(
                    groupingContentContent,
                    'groupingContentContentIsClose'
                );
                break;
            case 'Семантика уровня текста':
                isOpenOrCloseContent(
                    textLevelSemanticsContent,
                    'textLevelSemanticsContentIsClose'
                );
                break;
            case 'Правки':
                isOpenOrCloseContent(
                    editsContent,
                    'editsContentIsClose'
                );
                break;
            case 'Табличные данные':
                isOpenOrCloseContent(
                    tabularDataContent,
                    'tabularDataContentIsClose'
                );
                break;
            case 'Формы':
                isOpenOrCloseContent(
                    formsContent,
                    'formsContentIsClose'
                );
                break;
            case 'Сценарии':
                isOpenOrCloseContent(
                    scriptingContent,
                    'scriptingContentIsClose'
                );
                break;
            default:
                console.log('Произошла непредвиденная ошибка');
        }
    });
});