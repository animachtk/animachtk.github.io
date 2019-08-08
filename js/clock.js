function clock() {
var d = new Date();
var month_num = d.getMonth();
var today_num = d.getDay();
var day = d.getDate();
var hours = d.getHours(d.getUTCHours() +3);
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var days = d.getUTCDate();
 
today=new Array("Воскресенье" ,"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
 
month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");
 
if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;
if (day == 1) days = '<img src="https://dl.dropbox.com/s/i1y8n03pqmanvzu/36.png" style="max-height: 200px"/>';
if (day == 2) days = '<img src="https://dl.dropbox.com/s/rvoxfv65h6aqw8y/2152733-neptunia_mk2_014.png" style="max-height: 200px"/>';
if (day == 3) days = '<img src="https://dl.dropbox.com/s/jphw8qj6pxz2glt/rin_dance.png" style="max-height: 200px"/>';
if (day == 4) days = '<img src="https://dl.dropbox.com/s/isweaq5d7n0gu9a/fuck%20you%20I%27m%20a%20tomato.png" style="max-height: 200px"/>';
if (day == 5) days = '<img src="https://dl.dropbox.com/s/mnj8bb2lol936zb/Kotomi_Render.png" style="max-height: 200px"/>';
if (day == 6) days = '<img src="https://dl.dropbox.com/s/mb39z7c9qcl9oyc/towa_erio_denpa_onna_to_seishun_otoko_by_amassu-d7icf2o.png" style="max-height: 200px"/>';
if (day == 7) days = '<img src="https://dl.dropbox.com/s/d41f4s1ap884mwc/tumblr_m54hokR4TH1qk9lh4.png" style="max-height: 200px"/>';
if (day == 8) days = '<img src="https://dl.dropbox.com/s/k8fbbp6pltjitgl/Kotori-kanbe.png" style="max-height: 200px"/>';
if (day == 9) days = '<img src="https://dl.dropbox.com/s/fu4c59cy3f3gac1/9u3V2Ln.png" style="max-height: 200px"/>';
if (day == 10) days = '<img src="https://dl.dropbox.com/s/7t4mbidnpyqx7t0/58a35f2b2dfaf15a3e2bc0b4.png" style="max-height: 200px"/>';
if (day == 11) days = '<img src="https://dl.dropbox.com/s/0iexjhtarcjqbg8/aikatsu%2Bichigo%2Bdoushio%2Bhype%2Brender.png" style="max-height: 200px"/>';
if (day == 12) days = '<img src="https://dl.dropbox.com/s/exuo4amp4jxsznf/momod.png" style="max-height: 200px"/>';
if (day == 13) days = '<img src="https://dl.dropbox.com/s/xbgrfsfyqywrftn/57dd454b6b34e1573856aeaf.png" style="max-height: 200px"/>';
if (day == 14) days = '<img src="https://dl.dropbox.com/s/9tsiwbvvh40f9aw/00108.png" style="max-height: 200px"/>';
if (day == 15) days = '<img src="https://dl.dropbox.com/s/z3vr5zryxqyz87p/00134.png" style="max-height: 200px"/>';
if (day == 16) days = '<img src="https://dl.dropbox.com/s/652k297zrnwd30a/00138.png" style="max-height: 200px"/>';
if (day == 17) days = '<img src="https://dl.dropbox.com/s/x5ohgri6vydipaz/00156.png" style="max-height: 200px"/>';
if (day == 18) days = '<img src="https://dl.dropbox.com/s/zsgpc30iuq68lmv/5877c1a8a829a15993cc7af1.png" style="max-height: 200px"/>';
if (day == 19) days = '<img src="https://dl.dropbox.com/s/xaodp1gtxpf36cr/583ab1f811b47158a5473109.png" style="max-height: 200px"/>';
if (day == 20) days = '<img src="https://dl.dropbox.com/s/lert97hgnaohiq5/5908b6063443815bca070846.png" style="max-height: 200px"/>';
if (day == 21) days = '<img src="https://dl.dropbox.com/s/gl2pos88mwi77an/rad-000-003.png" style="max-height: 200px"/>';
if (day == 22) days = '<img src="https://dl.dropbox.com/s/e9sxizfepkpwxbu/yui_hirasawa_png_by_animepng-d7bzd5v.png" style="max-height: 200px"/>';
if (day == 23) days = '<img src="https://i.imgur.com/IY67T4Z.png" style="max-height: 200px"/>';
if (day == 24) days = '<img src="https://dl.dropbox.com/s/w7ysvsv6vn1y5cr/kyou01.png" style="max-height: 200px"/>';
if (day == 25) days = '<img src="https://dl.dropbox.com/s/7ccv5nh4ag296s3/kafuu_chino_render_by_aichwandesu-d7dw9y7.png" style="max-height: 200px"/>';
if (day == 26) days = '<img src="https://dl.dropbox.com/s/61m2ossfkyfgpuv/Mei_%28extraction%29.png" style="max-height: 200px"/>';
if (day == 27) days = '<img src="https://dl.dropbox.com/s/jvb54gixemr8vcv/lucia_konohana_by_zaydo-d5qqong.png" style="max-height: 200px"/>';
if (day == 28) days = '<img src="https://dl.dropbox.com/s/hcysw8lhe7lc6im/nakatsushizurubymgmnzxv.png" style="max-height: 200px"/>';
if (day == 29) days = '<img src="https://dl.dropbox.com/s/ccabattvlkliozg/Kanon2006.png" style="max-height: 200px"/>';
if (day == 30) days = '<img src="https://dl.dropbox.com/s/np3822hxjt6xvx6/puella_magi_madoka_magica___madoka_render_by_anouet-d5faklk.png" style="max-height: 200px"/>';
if (day == 31) days = '<img src="https://dl.dropbox.com/s/iagt3lwf33l5nf8/senri_akane_by_zaydo-d5r4ddc.png" style="max-height: 200px"/>';function msk(){d.setHours( d.getHours() + 3, d.getMinutes() + d.getTimezoneOffset()  );return d.toTimeString().substring(0,8)}
 
date_time = days + "<br \/>" + "Сегодня - " + today[today_num]+ " " + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp;<br \/> Текущее время - "+ hours + ":" + minutes + ":" + seconds + "<br \/> Московское время (UTC+3) - " +  msk();
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}
$('<center><span style="color: #75cbff; font-size: 24px; font-weight: bold" id="doc_time">Дата и время</span></center>').appendTo('#motdimg');
clock();