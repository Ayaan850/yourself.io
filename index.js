function dis(val){
 document.getElementById('result').value+=val;
}
function sol(){
 var result =  document.getElementById('result').value;
 if (result == ""){
  alert("No Number Found")
 }
 else{
  let x =
  document.getElementById('result').value;
  var y = eval(x)
  document.getElementById('result').value=y;
 
 }
}
function clr(){
  document.getElementById('result').value='';
}
