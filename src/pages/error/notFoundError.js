/* import error from './notFoundError.hbs';

document.addEventListener('DOMContentLoaded', ()=>
{
    const html = auth();
    const root = document.querySelector("#signup");
    root.innerHTML = html;
}) */
function notFoundError(){

    return `<div class="error-form">404</div>
    <div class="error-form">Не туда попали</div>
    <div class="create-account">
        <a href="">Назад к чатам</a>
    </div>`;
}

document.body.innerHTML = notFoundError();