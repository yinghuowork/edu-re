// 此文件并非配置文件 配置文件路径处在本Site的根目录
// 此文件为配置部署

// 导入
function config(config){
    document.getElementById("titleHead").innerHTML=config.siteName.headTitle
    document.getElementById("titleToolBar").innerHTML=config.siteName.toolBarTitle
}

// 获取Json文件并执行'config'函数
function errorOutput(){
console.error("网络错误")
  }
fetch("/config.json")
      .then(function (a) {
        return a.json();
      })
      .then(function (a) {
        config(a)
      })
      .catch((err) => errorOutput());
