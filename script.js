const display=document.getElementById("display");

function Button(num)
{
  display.value += num;
}

function Clear(){
  display.value="";
}

function Solve(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value="Enter A Valid Input";
  }
}