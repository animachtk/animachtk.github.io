$.get('https://api-animach.vercel.app/p?path=sl',function(st){window["streamlist"]=eval(st)})
.done(function(){$.getScript('js/player.js')})
.fail(function(){$("#wrap").append('<font size="5" color="red">Сервер недоступен, повторите позже.</font>')});
