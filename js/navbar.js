$.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
$(`
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Навигация</span> <span class="icon-bar"></span> <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Animach.tk</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li>
                    <a href="faq">FAQ</a>
                </li>
                <li>
                    <a href="requests">Реквесты</a>
                </li>
                <li>
                    <a href="raspisanie">Расписание</a>
                </li>
		<li class="dropdown" style="cursor: pointer;">
  <a class="dropdown-toggle"  id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Разделы
    <span class="caret"></span>
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1" style="background-color: rgba(0,0,0,0.7);">
    <li><a href="achat">Чат и стримы с музыкой</a></li>
    <li><a href="search">Поиск торрентов</a></li>
    <li><a href="asites">Аниме сайты</a></li>
    <li><a href="viewed">Просмотренное</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="rules">Правила</a></li>
    <li><a href="team">Наша команда</a></li>	
  </ul>
		</li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
		<li>
                    <a href="contact">Контакты</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<style>
.dropdown-menu>li>a {color: white;}
.dropdown-menu>li>a:hover {color: black;}
</style>
`).insertBefore('#wrap');	
