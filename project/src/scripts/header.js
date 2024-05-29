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
                        <a href="/html-tags/css_styles.html">CSS стили</a>
                    </li>
                    <li class="menu__item">
                        <a href="/html-tags/file_loader.html">Файловый загрузчик</a>
                    </li>
                    <li class="menu__item">
                        <a href="/html-tags/w3c.html">Доступность</a>
                    </li>
                    <li class="menu__item">
                        <a href="/html-tags/list.html">To Do List</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
`;
document.body.insertAdjacentHTML('afterbegin', header);