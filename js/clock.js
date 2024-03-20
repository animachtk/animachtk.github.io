var prev_day;
function clock() {
var d = new Date();
var month_num = d.getMonth();
var today_num = d.getDay();
var day = d.getDate();
var hours = d.getHours(d.getUTCHours() +3);
var minutes = d.getMinutes();
var seconds = d.getSeconds();
 
today=new Array("Воскресенье" ,"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
 
month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");
 
if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

/*default potd*/
days = '<img src="https://codeberg.org/Uranus_Solar/animach/raw/branch/master/img/motd/e/'+day+'.png" style="max-height: 200px"/>';
/*end*/

/*summer potd*/
if(month_num>=5 && month_num<=7){
days = '<img src="https://codeberg.org/Uranus_Solar/animach/raw/branch/master/img/motd/s/'+day+'.png" style="max-height: 200px"/>';
}
/*end*/

/*september*/
if(month_num == 8){
days = '<img src="https://codeberg.org/Uranus_Solar/animach/raw/branch/master/img/motd/d/'+day+'.png" style="max-height: 200px"/>';
}
/*end*/

/*xmas potd*/
if(month_num == 11 || month_num == 0){
days = '<img src="https://codeberg.org/Uranus_Solar/animach/raw/branch/master/img/motd/c/'+day+'.png" style="max-height: 200px"/>';
}
/*end*/

let date_img = days + "<br \/>";

function msk(){d.setHours( d.getHours() + 3, d.getMinutes() + d.getTimezoneOffset()  );return d.toTimeString().substring(0,8)}
 
let date_time = "Сегодня - " + today[today_num]+ " " + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp;<br \/> Текущее время - "+ hours + ":" + minutes + ":" + seconds + "<br \/> Московское время (UTC+3) - " +  msk();

if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;

if (day != prev_day) {
    if (document.layers) {
        document.layers.doc_time.document.write(date_img);
        document.layers.doc_time.document.close();
    } else {
        document.getElementById("doc_img").innerHTML = date_img;
    }
    prev_day = day;
}
 setTimeout("clock()", 1000);
}

$('<center><span style="color: #75cbff; font-size: 24px; font-weight: bold" id="doc_time">Дата и время</span></center>').insertAfter('.greeting');
$('<center><div id="doc_img"></div></center>').insertAfter('.greeting');
clock();
