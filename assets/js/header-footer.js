$(function(){




   

 

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
         console.log(scroll);
        var windowWidth = $(window).width();
        console.log(windowWidth);
        if(scroll > 200){
            $('header').css({
                background : '#fff',
                boxShadow: '0px 0px 20px -5px #000'
            });
            $('header nav ul li a').css({
                color:'#000'
            });
            $('.hamburgur-menu i').css({
                color: '#000'
            })
        }
        if(scroll < 200){
            $('header').css({
                background : 'transparent',
                boxShadow:'none'
            });
            $('header nav ul li a').css({
                color:'#fff'
            });
            $('.hamburgur-menu i').css({
                color: '#fff'
            })
        }
    });
});