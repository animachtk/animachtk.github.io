$('#search').on('click',()=>{
$.get('https://kodikapi.com/search?token=b7cc4293ed475c4ad1fd599d114f4435&title='+$('#search-title').val()).done((data)=>{
$('#foundlist').remove();
$('#leftpanel').append(`
<div id="foundlist" style="max-height:300px;overflow:auto"></div>
`);
let results=data.results||false;
    if(results.length>0){
        for(let a of results){
            let link=a.link||false,
                title=a.title||false,
                translation=a.translation.title||false,
                tid=a.translation.id||false,
                type=a.type||false,
                shikimori=a.shikimori_id||false,
                screens=a.screenshots||[];
            let item=`<div id="resItem" style="background-color:#2a2a2a;cursor: pointer;padding: 5px;border:1px white solid;margin: 5px;"><span class="item-type">
            </span>
            <span>
            <strong>[${type}] ${title+" ("+translation+" - "+tid+")"}</strong>
            </span>
            </div>`;
            if($('.afilter').prop('checked')){
            let re = /(anime)/;
            if(re.test(type)){
            $(item).appendTo('#foundlist').on('click',()=>{
            document.title = title + ' (' + translation + ')';
            $('.index-seo').empty();
            $('.index-seo').append(`<iframe id="kplayer" name="target" style="height:calc(100vh - 100px);width:100%;border:none;" src="${'https:'+link}"></iframe>`)
            });
            }
            }else{
            $(item).appendTo('#foundlist').on('click',()=>{
            document.title = title + '(' + translation + ')';
            $('.index-seo').empty();
            $('.index-seo').append(`<iframe id="kplayer" name="target" style="height:calc(100vh - 100px);width:100%;border:none" src="${'https:'+link}"></iframe>`)
            });
            }
        }
    }
    //console.log(data)
    
})
})
