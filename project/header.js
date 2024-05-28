const header = `
    <header class="header">
        <div class="header__container">
        <h1 class="header__logo">HTML теги</h1>
        <nav class="header__menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <a href="./index.html">HTML теги</a>
                </li>
                <li class="menu__item">
                    <a href="./css_styles.html">CSS стили</a>
                </li>
                <li class="menu__item">
                    <a href="./file_loader.html">Файловый загрузчик</a>
                </li>
                <li class="menu__item">
                    <a href="./w3c_page.html">Доступность</a>
                </li>
                <li class="menu__item">
                    <a href="./list.html">To Do List</a>
                </li>
            </ul>
        </nav>
        </div>
    </header>
`;
document.body.insertAdjacentHTML('afterbegin', header);