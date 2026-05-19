//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end


$('.btn-burger').on('click', function (e) {
    e.preventDefault
    $('.nav-menu').fadeToggle();
});


$('[name="phone"]').on('input', function () {

    let v = $(this).val().replace(/\D/g, '');

    if (v.startsWith('8')) v = '7' + v.slice(1);
    if (!v.startsWith('7')) v = '7' + v;

    v = v.substring(0, 11);

    let result = '+7';

    if (v.length > 1) result += ' (' + v.substring(1, 4);
    if (v.length >= 4) result += ') ' + v.substring(4, 7);
    if (v.length >= 7) result += '-' + v.substring(7, 9);
    if (v.length >= 9) result += '-' + v.substring(9, 11);

    $(this).val(result);

});

$('[name="mail"]').on('input', function () {

    let v = $(this).val();

    // удаляем пробелы
    v = v.replace(/\s/g, '');

    // только латиница, цифры и допустимые символы email
    v = v.replace(/[^a-zA-Z0-9@._\-]/g, '');

    // только один символ @
    let parts = v.split('@');
    if (parts.length > 2) {
        v = parts[0] + '@' + parts.slice(1).join('');
    }

    $(this).val(v.toLowerCase());

});

$('[name="mail"]').on('blur', function () {

    let v = $(this).val();

    if (v && !v.includes('@')) {
        $(this).val(v + '@gmail.com');
    }

});

$('.learn-slider').slick({
    slidesToShow: 1,
    arrows: true,
    variableWidth: true,
    infinite: true,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
    appendArrows: $('.learn-slider__arrow'),
});

$(document).ready(function () {

    $('.unique-tab').on('click', function () {

        let tabId = $(this).data('tab');

        $('.unique-tab').removeClass('active');
        $(this).addClass('active');

        $('.tab-pane-custom').removeClass('active').hide();

        $('#' + tabId)
            .fadeIn(200)
            .addClass('active');

    });

});
