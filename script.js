console.log("script running!");

const button1 = document.querySelector("#button");

function getInputValue(){
  var inputVal1 = document.getElementById("textBox1").value;
  var inputVal2 = document.getElementById("textBox2").value;
}
button1.addEventListener('click', e => {
  console.log("button 1 functional");
});
