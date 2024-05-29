(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o=`
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
`;document.body.insertAdjacentHTML("afterbegin",o);
