window.onresize=function(){  
    changeDivHeight();  
 }  
 function changeDivHeight(){ 
      let line = document.getElementsByClassName("line1")[0];
      let pageprincipal = document.querySelector(".pageprincipal");
     let heightText = pageprincipal.getAttribute(height);
      line.style.height = heightText;
 
 
}

window.οnlοad=function(){
    changeDivHeight();
}
//当浏览器窗口大小改变时，设置显示内容的高度
window.οnresize=function(){
    changeDivHeight();
}
function changeDivHeight(){				
   let hBody = document.documentElement.clientHeight;//获取页面可见高度
   let hDiv = document.querySelector(".pageprincipal").style;
   document.getElementsByClassName("line1")[0].style.height=hDiv;
}