    $(function() {
        $('.fullMenu').css('display','none');

        $('.showMenu__sub__item').mouseenter(function () {
            $('.fullMenu').css('display','flex');
            $('.showMenu').css('display','none');
            $('.showMenuHr').css('display', 'none');            
        })

        $('.fullMenu').mouseleave(function () {
            $('.fullMenu').css('display','none');
            $('.showMenu').css('display','flex');
            $('.showMenuHr').css('display', 'block');
        })
    });
