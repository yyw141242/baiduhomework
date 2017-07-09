var gshi,gfen,gmiao,shi,fen,miao;
function add(){
  for(var i=0;i<30;i++){
    var a1=document.createElement ('a');
    a1.className= 'a1';
    var p1=document.createElement ('p');
    p1.className= 'left';
    var p2=document.createElement ('p');
    p2.className= 'right'
    if(i%5==0){
      a1.style.height= '8px';
      p1.style.height= '8px';
      p1.style.width= '30px';
      p1.innerHTML='<span class="num"style="transform: translate(30px,-12px) rotate('+(-6*i)+'deg);">'+((9+i/5)>12?(9+i/5)-12:(9+i/5))+'</span>';
      p2.style.height= '8px';
      p2.style.width= "30px";
      p2.innerHTML= '<span class="num" style="transform:translate(-30px,-12px) rotate('+(-6*i)+'deg)">'+(3+i/5)+'</span>';
    }
    a1.appendChild (p1);
    a1.appendChild (p2);
    a1.style.transform= 'rotate('+6*i+'deg)';
    document.body.children[0].appendChild(a1)
  }
}
var mz=document.getElementById ("mz");
var fz=document.getElementById ("fz");
var sz=document.getElementById ("sz");
function c(shi1,fen1,miao1){
  var miao= miao1 % 60;
  var fen= fen1 % 60;
  var h12= shi1 % 12;
  var x= (fen - 1)*6 + miao*0.1;

  var z= ((h12)* 30+ fen*0.5)
  mz.style.transform= 'rotate('+miao*6+'deg)';
  fz.style.transform= 'rotate('+x+'deg)';
  sz.style.transform= 'rotate('+z+ 'deg)';
  
}
function $(a){
  return document.getElementById(a);
}
window.onload= function(){
  add();
  var times= setInterval(function(){
    var d= new Date();
    c(d.getHours(),d.getMinutes(),d.getSeconds());
  },100);
}