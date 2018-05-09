//Ensure active nav highlight upon click
$('.nav a').on('click', (event) => {
    $('.navbar-collapse').collapse('hide');
})

// Transitions to different parts of page
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top
    }, 650, 'swing', function () {
        window.location.hash = target;
    });
});

// Transition for hovering over skill
$('.skill-group i').hover((event) => {
    $('.icon-name').filter($(event.target).siblings()).removeClass('hide');
    $('.skill-group i').not($(event.target)).each( (index, element) => {
        element = $(element);
        element.addClass('dull');
    })
}, () => {
    $('.skill-section i').each( (index, element) => {
        $('.icon-name').filter($(event.target).siblings()).addClass('hide');
        element = $(element);
        element.removeClass('dull');
    })
});