$(function(){




    $('.hamburgur-menu').click(function () {
        if ($(window).width() < 700){
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                var windowWidth = $(window).width();
                if(scroll > 500){
                    $('nav ul').css({                        
                        backgroundColor: '#fff'            
                    });                    
                    $('nav ul li a').css({              
                        color: '#000' 
                    });
                }
                if(scroll < 500){
                    $('nav ul').css({                        
                        backgroundColor: '#fff'            
                    });                    
                    $('nav ul li a').css({              
                        color: '#000' 
                    });
                }
            });
        }
        $('nav ul').css({
            flexDirection: 'column',
            textAlign: 'center',
            position: 'absolute',           
            left:'0px',
            top:'70px',
            width: '100%',
            backgroundColor: '#fff'            
        });
        $('nav ul li').css({              
            marginBottom: '10px' 
        });
        $('nav ul li a').css({              
            color: '#000' 
        });
        
        $('nav ul').slideToggle();
        
    });

 

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