function dateShow(){
  var today=new Date();
  var dd=today.getDate();
  var mm=today.getMonth()+1;
  var yyyy=today.getFullYear();
    if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }
    today=mm+'-'+dd+'-'+yyyy;
    alert(today);
    today = mm + '/' + dd + '/' + yyyy;
    alert(today);
    today = dd + '-' + mm + '-' + yyyy;
    alert(today);
    today = dd + '/' + mm + '/' + yyyy;
    alert(today);
}

function calcArea(){
  var sideA=parseFloat(document.getElementById("sideA").value);
  var sideB=parseFloat(document.getElementById("sideB").value);
  var sideC=parseFloat(document.getElementById("sideC").value);
  var perimeter=(sideA+sideB+sideC)/2;
  var area=Math.sqrt(perimeter*((perimeter-sideA)*(perimeter-sideB)*(perimeter-sideC)));
  document.getElementById("area").innerHTML=area;
}

function animate_string(id){
  var element=document.getElementById(id);
  var textNode=document.getElementById("animateArea");
  textNode.innerHTML=element.value;
  var text=textNode.innerHTML;

  setInterval(function()){
    text=text[text.length-1]+text.substring(0,text.length-1);
    document.getElementById("animateArea").innerHTML=text;},200);
  }

  function guessNumber() {
      var num = Math.ceil(Math.random() * 10);
      var gnum = prompt('Guess the number between 1 and 10 inclusive');
      if (gnum == num)
          alert('Matched');
      else
          alert('Not matched, the number was ' + num);
  }

  
