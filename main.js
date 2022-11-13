const icon = document.getElementById(`icon-burger`);
const menu = document.getElementById(`others-id`);

icon.addEventListener(`click`, ()=> {
    menu.classList.toggle(`menu__others-show`);
})