window.onresize=function(){  
    changeDivHeight();  
 }  
 function changeDivHeight(){ 
      let line = document.getElementsByClassName("line1")[0];
      let pageprincipal = document.querySelector(".pageprincipal");
      pageprincipal.getAttribute()
      line.style.height = pageprincipal.style.height;
 
 
}