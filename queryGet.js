// GETクエリのw,hで、viewportのscaleを動的に変更する
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>

// クエリ取得
var arg  = new Object;
url = location.search.substring(1).split('&');


// クエリパース
for(i=0; url[i]; i++) {
  var j = url[i].split('=');
  arg[j[0]] = j[1];
}


// クエリwを元に、viewportのスケールを計算
var viewportScale = 1.0;
if(arg.w){

  viewportScale =  arg.w / 750;
  //$('body').width(arg.w);
  //$('body').append(arg.w + "w");
}
if(arg.h){
  //$('body').width(arg.h);
  //$('body').append(arg.h + "h");
}

$("meta[name='viewport']").attr('content','width=device-width,initial-scale=' + viewportScale);
// PCなら、zoomというstyleでviewportのように拡縮できるが、推奨されない

</script>


