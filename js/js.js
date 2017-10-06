// Меню по скролу
var test = document.getElementById('test');
var oldScrollY = 0;
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var dY = scrolled - oldScrollY;

    if (dY > 0) {
        test.style.top = "-40px";
    } else {
        test.style.top = "40px";
    }
    oldScrollY = scrolled;
};

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if( scrolled > 100 ) {
        document.getElementById('test').removeAttribute("class");
        document.getElementById('test').setAttribute("class", "opacit");
    } else if ( scrolled < 100) {
        document.getElementById('test').removeAttribute("class");
        document.getElementById('test').setAttribute("class", "inplace");
    }
};

// меню моб версия
var min_menu = document.getElementById('min_menu');
var opacit = document.querySelector('.opacit');

function fn() {
    if (window.innerWidth < 859) {
        min_menu.innerHTML = '<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>';
        min_menu.style.background = 'transparent';
    } else if (window.innerWidth > 859) {
        min_menu.innerHTML = '<li><a href="#">Контакты</a></li>\n' +
            '<li><a href="#work">Работы</a></li>\n' +
            '<li><a href="#dizain">Дизайн</a></li>\n' +
            '<li><a href="#sertificate">Сертификаты</a></li>\n' +
            '<li><a href="#task">Задачи</a></li>\n' +
            '<li><a href="#vk_comments">Чат</a></li>';
        min_menu.style.background = 'rgba(12, 42, 95, 0.81);';

        /* Плавный скролл */
        /*var link_menu = document.getElementById('min_menu');
        smooth_scroll(link_menu, scrollY);

        function smooth_scroll(link_menu, scrollys) {

            link_menu.addEventListener('click', function (e) {
                e.preventDefault();

                switch (e.target.textContent) {
                    case "Работы":
                        var w = 1100;
                        break;
                    case "Дизайн":
                        w = 2140;
                        break;
                    case "Сертификаты":
                        w = 2970;
                        break;
                    case "Задачи":
                        w = 3980;
                        break;
                    case "Чат":
                        w = 4480;
                        break;
                    default:
                        w = 0;
                        break;
                }

                if (scrollys < w) {

                    var intervalID = setInterval(function () {

                        scrollTo(0, scrollys += 30);
                        if (scrollys >= w) {
                            clearInterval(intervalID);
                        }
                    }, 10);

                } else if (scrollys > w) {
                    intervalID = setInterval(function () {

                        scrollTo(0, scrollys -= 30);
                        if (scrollys <= w) {
                            clearInterval(intervalID);
                        }
                    }, 10);
                }
            });
        }*/
    }
}

window.addEventListener("resize", fn);
window.addEventListener("load", fn);

// Отрабатываю октрытие и закрытие меню
min_menu.addEventListener('click', function () {

    var x = min_menu.dataset.menu;
//console.log(x);
    if (x === '0') {
        min_menu.innerHTML = '<li><a href="#">Контакты</a></li><li><a href="#work">Работы</a></li><li><a href="#dizain">Дизайн</a></li><li><a href="#sertificate">Сертификаты</a></li><li><a href="#task">Задачи</a></li><li><a href="#vk_comments">Чат</a></li>';
        min_menu.dataset.menu = 1;
    } else if (x === '1') {
        if (window.innerWidth < 859) {
            min_menu.innerHTML = '<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>';
            min_menu.dataset.menu = 0;
        }
    }
});

/*
Слайдер
*/
var qty = 12; // Количество изображений
var milisecond = 7000; // Количество милисекунд для смены слайда
var slide__left = document.querySelector('.slide__left');
var slide__right = document.querySelector('.slide__right');
var slide = document.querySelector('.slide');
var slide__circle = document.querySelector('.slide__circle');

// Кружки
var circle_container = document.createElement('div');
circle_container.classList.add('slide__circle');
var y = 1;
for (var x = 0; x < qty; x++) {
    var circle = document.createElement('span');
    circle.classList.add('slide__circle_active');
    circle.setAttribute('data-int_circle', y);
    circle_container.appendChild(circle);
    y++;
}
slide.appendChild(circle_container);

// Смена изображений по клику
slide__left.addEventListener('click', function () { // левый
    var i = slide.dataset.int_img - 1;
    if (i < 1) {
        i = qty;
    }
    slide.style.background = "url('../img/" + i + ".jpg') center center no-repeat";
    slide.style.backgroundSize = "cover";
    slide.dataset.int_img = i;

    var circle_arr = document.querySelectorAll('.slide__circle_active');
    for (var s = 0; s < circle_arr.length; s++) {
        if (+circle_arr[s].dataset.int_circle === +i) {
            for (var z = 0; z < circle_arr.length; z++) {
                circle_arr[z].removeAttribute('id');
            }
            circle_arr[s].setAttribute('id', 'slide__circle_active');
        }
    }

});

// Правый
slide__right.addEventListener('click', function () {
    new_img();
});

// Авто смена
setInterval(function () {
    new_img();
}, milisecond);

// Функция смены слайда в большую сторону
function new_img() {
    var j = +slide.dataset.int_img + 1;
    if (j > qty) {
        j = 1;
    }
    slide.style.background = "url('../img/" + j + ".jpg') center center no-repeat";
    slide.style.backgroundSize = "cover";
    slide.dataset.int_img = j;

    var circle_arr = document.querySelectorAll('.slide__circle_active');
    for (var a = 0; a < circle_arr.length; a++) {
        if (+circle_arr[a].dataset.int_circle === +j) {
            for (var b = 0; b < circle_arr.length; b++) {
                circle_arr[b].removeAttribute('id');
            }
            circle_arr[a].setAttribute('id', 'slide__circle_active');
        }
    }
}

/* smile */
if (window.innerWidth > 859) {

    var head = document.querySelector('.description_head1');
    var img = document.querySelector('.description_img');
    var dream0 = document.querySelector('.dream0');
    var dream1 = document.querySelector('.dream1');
    var dream2 = document.querySelector('.dream2');

    head.addEventListener('mouseover', function () {
        img.setAttribute('class', 'description_img1');
        dream0.style.display = 'inline-block';
        dream1.style.display = 'inline-block';
        dream2.style.display = 'inline-block';
    });
    head.addEventListener('mouseout', function () {
        document.querySelector('.description_img1').setAttribute('class', 'description_img');
        dream0.style.display = 'none';
        dream1.style.display = 'none';
        dream2.style.display = 'none';
    });
    setInterval(function () {
        if (document.querySelector('.dream2 p').innerText === 'Хотелось бы написать ИИ на Javascript. И ещё написать ремастеринг игры "Command & Conquer 3: Tiberium Wars"') {
            document.querySelector('.dream2 p').innerText = 'С удовольствием пошёл бы стажёром на 1-2 месяца, за подзатыльники. Или поработал бы, с маленькой оплатой, и маленькими требованиями)';
        } else {
            document.querySelector('.dream2 p').innerText = 'Хотелось бы написать ИИ на Javascript. И ещё написать ремастеринг игры "Command & Conquer 3: Tiberium Wars"';
        }
    }, 3000);
}


/* Убираю элементы на маленьких экранах */
if (window.innerWidth < 1200) {
    document.querySelector('.ico_back1').style.display = 'none';
    document.querySelector('.ico_back2').style.display = 'none';
    document.querySelector('.ico_back3').style.display = 'none';
    document.querySelector('.ico_back4').style.display = 'none';
    document.querySelector('.ico_back5').style.display = 'none';
    document.querySelector('.ico_back6').style.display = 'none';
    document.querySelector('.ico_back7').style.display = 'none';
    document.querySelector('.ico_back8').style.display = 'none';
    document.querySelector('.ico_back9').style.display = 'none';
    document.querySelector('.ico_back10').style.display = 'none';
    document.querySelector('.ico_back11').style.display = 'none';
    document.querySelector('.ico_back12').style.display = 'none';
    document.querySelector('.ico_back13').style.display = 'none';
    document.querySelector('.ico_back14').style.display = 'none';
    document.querySelector('.ico_back15').style.display = 'none';
    document.querySelector('.ico_back16').style.display = 'none';
    document.querySelector('.ico_back17').style.display = 'none';
    document.querySelector('.ico_back18').style.display = 'none';
    document.querySelector('#pluso').style.display = 'none';
}