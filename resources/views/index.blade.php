<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Clothing Store</title>
</head>
<body>
<div id="root"> </div>


<script src="{{ mix('js/index.js') }}"></script>
<script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossorigin="anonymous"></script>
<script>


    var s = $('input'),
        f  = $('form'),
        a = $('.after'),
        m = $('h4');

    s.focus(function(){
        if( f.hasClass('open') ) return;
        f.addClass('in');
        setTimeout(function(){
            f.addClass('open');
            f.removeClass('in');
        }, 1300);
    });

    a.on('click', function(e){
        e.preventDefault();
        if( !f.hasClass('open') ) return;
        s.val('');
        f.addClass('close');
        f.removeClass('open');
        setTimeout(function(){
            f.removeClass('close');
        }, 1300);
    });

    f.submit(function(e){
        e.preventDefault();
        m.html('Thanks, high five!').addClass('show');
        f.addClass('explode');
        setTimeout(function(){
            s.val('');
            f.removeClass('explode');
            m.removeClass('show');
        }, 3000);
    })

</script>
</body>
</html>
