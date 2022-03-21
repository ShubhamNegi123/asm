
$(document).ready(function () {

    $('#name').blur(function () {
        var name = $('#name').val();
        if (name == '') {
            $('.name-error').text('name can not be empty');
            $('.name-error').css({
                visibility: 'visible',
                opacity: '1'
            });
            submit = false;
        } else {
            $('.name-error').css({
                visibility: 'hidden',
                opacity: '0'
            });
            submit = true;
        }
    });

    
    $('#email').blur(function () {
        var email = $('#email').val();
        if (email == '') {
            $('.email-error').text('email can not be empty');
            $('.email-error').css({
                visibility: 'visible',
                opacity: '1'
            });
            submit = false;
        } else {
            $('.email-error').css({
                visibility: 'hidden',
                opacity: '0'
            });
            submit = true;
        }
    });


    $('#phone').blur(function () {
        var phone = $('#phone').val();
        if (phone == '') {
            $('.phone-error').text('phone can not be empty');
            $('.phone-error').css({
                visibility: 'visible',
                opacity: '1'
            });
            submit = false;
        } else {
            $('.phone-error').css({
                visibility: 'hidden',
                opacity: '0'
            });
            submit = true;
        }
    });

    $('#message').blur(function () {
        var message = $('#message').val();
        if (message == '') {
            $('.message-error').text('message can not be empty');
            $('.message-error').css({
                visibility: 'visible',
                opacity: '1'
            });
            submit = false;
        } else {
            $('.message-error').css({
                visibility: 'hidden',
                opacity: '0'
            });
            submit = true;
        }
    });


});


