var i = 0;
var i1 =0;
var i2 =0;

var txt = 'jadi gini..aku tuh pengen tau gituh pendapat orang orang kalo aku tuh sebenarnya orang nya gimana?';
var txtt = 'karna kalo menurut aku sendiri sih...aku mah orang nyaaaaa................baik🙂,';
var txttt = "tapi kalo menurut kamu gimana?\nisi aja sejujur nya santai ini anonymous kok kayak ngl";

var speed = 95;



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWrier2() {
  if (i1 < txtt.length) {
    document.getElementById("txt2").innerHTML += txtt.charAt(i1);
    i1++;
    setTimeout(typeWrier2, speed);
  }
}
function typeWrier3() {
  if (i2 < txttt.length) {
    document.getElementById("txt3").innerHTML += txttt.charAt(i2);
  i2++;
    setTimeout(typeWrier3, speed);
  }
}
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
      btn.addEventListener("click", function() {
        typeWriter();
        var myTimeout = setTimeout(function() {
         document.getElementById("hide1").style.display = "block";
      }, 10000);
      });
      btn1.addEventListener("click", function() {
        
         typeWrier2();
         setTimeout(typeWrier3, 9000);
var time = 12000;
  var myTimeout2 = setTimeout(function() {
  document.getElementById("hide2").style.display = "block";
}, time);
  var myTimeout3 = setTimeout(function() {
  document.getElementById("hide3").style.display = "block";
}, time);
      });