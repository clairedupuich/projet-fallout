window.onresize=function(){  
    changeDivHeight();  
 }  
 function changeDivHeight(){ 
      let line = document.getElementsByClassName("line1")[0];
      let pageprincipal = document.querySelector(".pageprincipal");
     let heightText = pageprincipal.getAttribute(height);
      line.style.height = heightText;
 
 
}