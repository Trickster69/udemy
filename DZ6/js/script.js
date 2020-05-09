let menu = document.querySelectorAll(".menu")[0];
let menuItem = document.querySelectorAll(".menu-item");
let newItem = document.createElement("li");
let title = document.querySelector("#title");
let adv = document.querySelector(".adv");
let reviews = document.querySelector("#prompt");

menu.insertBefore(menuItem[2], menuItem[1]); //Восстановить порядок в меню

newItem.classList.add("menu-item");
newItem.textContent = "Пятый пункт";
menu.appendChild(newItem); //добавить пятый пункт

document.body.style.backgroundImage = "url(../img/apple_true.jpg)"; //Заменить картинку заднего фона на другую из папки img

title.textContent = "Мы продаем только подлинную технику Apple"; //Поменять заголовок
adv.remove(); // Удалить рекламу со страницы

reviews.textContent = prompt("Шо думаешь об ЭПЛ?", ""); //Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"