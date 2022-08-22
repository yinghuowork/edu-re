function errorOutput(){
  var strVar = "";
    strVar += "<h1>出现错误<\/h1><p>获取文件错误<\/p><p>可能因为您的网络出现问题 或者是您访问的参数有问题<\/p>\n";
  document.getElementById("main").innerHTML = strVar;
}

function GetQueryString(api) {
    var reg = new RegExp("(^|&)" + api + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var sname = GetQueryString("p");
  if (sname != null) {
    var sname_ = decodeURIComponent(sname);
  }
  if (sname != null) {
    fetch("/assets/json/" + sname + ".json")
      .then(function (a) {
        return a.json();
      })
      .then(function (a) {
        document.getElementById("main").innerHTML = a.body;
      })
      .catch((err) => errorOutput());
  } else {
    location.replace("?p=error-1");
  }