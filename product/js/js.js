$(document).ready(function(){
    // smooth scroll


    $("#descktop_scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        top = top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });

    $("#scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        top = top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(window).scroll(function() {
        var scrollVal = window.scrollY;
        if (scrollVal >= 100){
          $('.descktop__menu').css({'background': '#232323'});
        }
        else {
          $('.descktop__menu').css({'background': 'transparent'});
        }
      }
    );
});