$(function () {
    //当前轮播到的索引
    var royCarouselIndex = 0;

    //轮播图成员的个数
    var itemCount = $('.roy_carousel>ul').find('li').length;
    var royCarouselWidth = $('.roy_carousel').outerWidth();
    var royCarouselTimer = null;
    var lastIndex = 0;


    $('.roy_carousel>ul').children().toArray().forEach(function (item, index) {

        $(item).attr('data-index', index)
    })

    $('.roy_carousel_indicators').children().toArray().forEach(function (item, index) {

        $(item).attr('data-index', index)
    })

    function royCarouselAnimate(roy_direction) {
        $('.roy_carousel_indicators>div').eq(lastIndex).css({
            "background-color": "", "color": '#3C2314'
        })

        $('.roy_carousel_indicators>div').eq(royCarouselIndex).css({
            "background-color": "#3C2314", "color": 'white'
        })
        roy_direction = roy_direction == 1 ? 1 : -1;
        if (roy_direction == 1) {

            $('.roy_carousel>ul').css({
                left: royCarouselWidth * -1 + 'px'
            }).find('li:last').remove().prependTo($('.roy_carousel>ul'));

            $('.roy_carousel>ul').stop().animate({

                left: 0

            }, 300)
        }
        else {

            $('.roy_carousel>ul').stop(true, true).animate({
                left: royCarouselWidth * -1 + 'px'


            }, 300, function () {
                $('.roy_carousel>ul').css({
                    left: 0
                }).find('li:first').remove().appendTo($('.roy_carousel>ul'))

            })


        }

    }
    $('.roy_carousel_indicators>div').eq(0).css({
        "background-color": "#3C2314"
    })
    //轮播
    function royCarouselLoop() {



        royCarouselTimer = setTimeout(function () {
            royCarouselIndex++;
            royCarouselIndex %= itemCount;
            $('.roy_carousel_indicators>div').eq(lastIndex).css({
                "background-color": "", "color": '#3C2314'
            })

            $('.roy_carousel_indicators>div').eq(royCarouselIndex).css({
                "background-color": "#3C2314", "color": 'white'
            })
            royCarouselAnimate(-1)

            lastIndex = royCarouselIndex;

            royCarouselLoop();

        }, 2000)
    }

    royCarouselLoop()

    $('.roy_carousel_indicators').mouseenter(function () {
        clearTimeout(royCarouselTimer);
        royCarouselTimer = null;

    }).mouseleave(function () {

        $(".roy_carousel>ul").css({
            left: 0
        }).find(`li[data-index$=${royCarouselIndex}]`).prevAll().toArray().reverse().forEach(function (item, index) {

            $(item).appendTo($('.roy_carousel>ul'));
            console.log($(item).find('img').prop('src'))

        })

        royCarouselLoop();


    })

    $('.roy_carousel_indicators>div').mouseenter(function (e) {


        royCarouselIndex = e.target.dataset.index;
        lastIndex = royCarouselIndex;
        console.log('>>>>>>>>', royCarouselIndex)

        $(".roy_carousel_indicators>div").css({
            'background-color': "", "color": '#3C2314'
        })

        $(e.target).css({
            'background-color': "#3C2314", "color": 'white'
        })

        $('.roy_carousel>ul').css({

            left: royCarouselWidth * $(".roy_carousel>ul").find(`li[data-index$=${royCarouselIndex}]`).prevAll().length * -1 + 'px'

        })

    })
})