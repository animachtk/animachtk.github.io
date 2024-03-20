 $(`
 <center><font size="5" style="z-index: 5; background: red; color: white;padding: 5px">Разделы</font></center>
  <div class="slider">

    <div class="slider__wrapper">

      <div class="slider__item">
        <div class="video" style="background-image: url(https://dl.dropbox.com/s/49tzzlnxxc5e6yo/office-background-image_1631208.jpg);background-size: cover;">
		<div class="infoslide" style="background: black; border: 1px solid;border-style: solid;border-color: white;padding-left: 5px;margin-top: 15px;float: left;margin-right: 1vw;width:200px;height: 180px; width: 32%;position: relative;top: 15px;left: 50px;overflow-y: auto">
		<a class="btn" style="background: white !important; color: black" href="online.html">Онлайн</a></br>
		<font class="slidetext">В этом разделе вы можете совместно просматривать видео и общаться в чате.</font>
		</div>
<img class="slideimg" src="https://dl.dropbox.com/s/urh69nved5xufmo/cat_headphones.png"/>
</div>
      </div>
      <div class="slider__item">
        <div class="video" style="background-image: url(https://dl.dropbox.com/s/vv036uqbfnay6j0/cinema.jpg);background-size: cover;">
		<div class="infoslide" style="background: black; border: 1px solid;border-style: solid;border-color: white;padding-left: 5px;margin-top: 15px;float: left;margin-right: 1vw;width:200px;height: 180px; width: 35%;position: relative;top: 15px;left: 50px;">
		<a class="btn" style="background: white !important; color: black"  href="https://animachtk.github.io/search.html">Поиск торрентов</a></br>
		<font class="slidetext">В этом разделе вы можете найти и скачать торренты с аниме, фильмами и сериалами</font>
		</div>
<img class="slideimg" src="https://dl.dropbox.com/s/st8up7vdt6n07oo/5bb61fead93771663f6cad8a.png"/>
</div>
      </div>
      <div class="slider__item">
        <div class="video" style="background-image: url(https://dl.dropbox.com/s/8xx7orzttlzomak/1057865d2330371.jpg);background-size: cover;">
		<div class="infoslide" style="background: black; border: 1px solid;border-style: solid;border-color: white;padding-left: 5px;margin-top: 15px;float: left;margin-right: 1vw;width:200px;height: 180px; width: 35%;position: relative;top: 15px;left: 50px;">
		<a class="btn" style="background: white !important; color: black" href="https://animachtk.github.io/asites.html" style="text-decoration: none" >Аниме сайты</a></br>
		<font class="slidetext">В этом разделе вы можете быстро путешествовать по популярным аниме сайтам</font>
		</div>
<img class="slideimg" src="https://dl.dropbox.com/s/33mw4nzpbolsfez/034.png"/>
</div>
      </div>

    </div>
    <a class="slider__control slider__control_left" href="#" role="button"></a>
    <a class="slider__control slider__control_right slider__control_show" href="#" role="button"></a>
  </div>

  <script src="https://animachtk.github.io/js/slider.js"></script>
</center>
</div>
 
 <center><font size="5" style="z-index: 5; background: red; color: white;padding: 5px">Важное</font></center>
<div class="container-slides">
  <ul id="slides">
    <li class="slide showing">
            <div id="slide-block">
        <center style="background-color: rgba(0,0,0,0.7)">
            <font id="quote" class="shadow">
                Здесь должна была быть важная информация
            </font>
        </center>
            </div>
        </li>
    <li class="slide">
            <div id="slide-block1">
		<div id="links" style="background: black; border: 1px solid;border-style: solid;border-color: #836fc1;padding-right: 5px;margin-top: 15px;float: left;margin-left: 1vw;width:200px;height: 180px">
	<center>
	<font color="#836fc1" size="5">Наши комнаты</font> <br />
	<a href="https://animachtk.github.io/online" target="_blank"><font size="4">Анимач</font></a><br />
	<a href="https://tv.2ch.hk/r/a" target="_blank"><font size="4">Два.ч</font></a><br />
	<a href="https://synchtube.ru/r/pururin" target="_blank"><font size="4">Пурурин</font></a><br />
	<a href="https://owlch.ru/r/a" target="_blank"><font size="4">Овла.ч</font></a><br />
	<a href="https://cytu.be/r/pur" target="_blank"><font size="4">cytu.be</font></a><br />
	</center>
	</div>
            </div>
        <img src="https://animach-si.000webhostapp.com/slides/img/images/slide01/random.php" style="height: 250px;position: absolute;bottom: 0px;right: 0vw;float:right;z-index: -1;"/>
    </li>
    <li class="slide">
        <div id="slide-block2">
<img src="https://animach-si.000webhostapp.com/slides/img/images/slide02/random.php" style="height: 250px;position: absolute;bottom: 0px;z-index: -1"/>
        </div>
        </li>
  </ul>
<center>
  <div class="buttons" style="margin: auto">
    <button class="controls" id="previous" style="float: left">&lt;</button>

    <button class="controls" id="pause" style="margin: auto;">&#10074;&#10074;</button>

    <button class="controls" id="next" style="float: right;">&gt;</button>
  </div>
</center>
</div>
`).insertAfter('#announcements');
$.getScript('https://animachtk.github.io/js/slides.js');
$(`<style>
.slide:nth-of-type(2){
  background-image: url(https://animach-si.000webhostapp.com/slides/img/backgrounds/slide01/background.php);background-size: cover;
}
.slide:nth-of-type(3){
  background-image: url(https://animach-si.000webhostapp.com/slides/img/backgrounds/slide02/background.php);background-size: cover;
}

.slide:nth-of-type(1){
  background-image: url('https://dl.dropbox.com/s/opxz21l3fsaczx0/26757_haruhi_suzumiya_yuki_nagato.jpg');;background-size: cover;
}
</style>`).appendTo("head");

 $.ajax({url : 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=ru&jsonp=?',dataType: 'jsonp',success: function(data){var quote = data.quoteText;if(data.quoteAuthor != ""){var author = data.quoteAuthor;}else{var author = ""}$('#quote').html(quote+'<br> - © '+author)},error: function(data){$('#quote').html("Здесь должна была быть цитата, но что-то пошло не так.");}});