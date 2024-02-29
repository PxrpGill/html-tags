// Template, который будет вставляться в Dialog
const templateMessageDialog = document.getElementById("message-template");
const dialog = templateMessageDialog.content.cloneNode(true);


const message_sections = {
    'article': 'article - Независимый блок контента, например, статья или пост в блоге',
    'section': 'Section - определяет раздел в документе',
    'nav': 'nav - навигационная панель сайта, на которой находятся ссылки',
    'aside': 'aside - боковой блок страницы, сайдбар',
    'h': '<h1>Это h1</h1><h2>Это h2</h2><h3>Это h3</h3><h4>Это h4</h4><h5>Это h5</h5><h6>Это h6</h6>',
    'hgroup': `hgroup - используется для группирования заголовков веб-страницы или раздела.
     Внутри располагаются один тег из заголовков, за которым следует ноль или больше p тегов`,
    'header': 'header - шапка страницы',
    'footer': 'footer - подвал страницы',
    'address': 'address - содержит адрес (контактные данные создателя сайта)',
}; 

function open_dialog(key, id) {
    const divBlock = document.getElementById(id);
    dialog.querySelector('#dialogWindow').querySelector('p').innerHTML = message_sections[key];
    divBlock.append(dialog);
    dialog.querySelector('#dialogWindow').show();
}