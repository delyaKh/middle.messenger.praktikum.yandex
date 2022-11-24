import auth from '../../pages/auth/auth.hbs';

document.addEventListener('DOMContentLoaded', ()=>
{
    const signUpLink ="./notFoundError.html";
    const html = auth({"signUpLink":signUpLink});
    const root = document.querySelector("#auth");
    root.innerHTML = html;
})