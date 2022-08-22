// mdui
var $ = mdui.$;
var inst = new mdui.Drawer('#drawer');
$('#drawer_toggle').on('click', function () {
  inst.toggle();
});
//button test
$("#action_1").on("click",function(){location.href="/preview.html?p=1"})
$("#action_2").on("click",function(){location.href="/preview.html?p=2"})
// display: inline-flex; (mobile)
if (window.screen.width < 500) {
    console.log(1)
}
else{
  const collection = document.getElementsByClassName("stylecard");
  collection[0].innerHTML = ".card{display: inline-flex;}";
}
//
var threshold = 100;
this.timer1 = setInterval(function () {
      //当浏览器窗口宽度或高度与页面的宽度和高度的差值大于100的时候触发页面刷新
      if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        // 刷新页面；
        window.location.reload()
      }
    })


