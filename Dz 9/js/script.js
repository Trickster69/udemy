window.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll('.info-header-tab');
    let tabInfo = document.querySelectorAll('.info-tabcontent');
    let mainTab = document.querySelector('.info-header');

    function hideTabInfo(a) {
        for (let i = a; i < tabInfo.length; i++) {
            tabInfo[i].classList.remove('show');
            tabInfo[i].classList.add('hide');
        }
    }
    hideTabInfo(1);

    function showTabInfo(b) {
        if (tabInfo[b].classList.contains("hide")) {
            tabInfo[b].classList.remove('hide');
            tabInfo[b].classList.add('show');
        }
    }

    mainTab.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabInfo(0);
                    showTabInfo(i);
                    break;
                }
            }
        }
    });


});