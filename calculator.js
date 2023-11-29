const display=document.querySelector('.dispaly');
const buttons=document.querySelectorAll('button');
const specialchars =["%","/","*","+","-","="]
let output="";
const calculate = (btnValue) => {  if (btnValue === "=" && btnValue !== "") {

    
    
     output =eval (output.replace("%", "/100"));
    

    
    } else if (btnValue === "AC") {
    

    
    output = "";
    
    
    
    } else if (btnValue === "DEL") {
    
   
    
    output = output.toString().slice(0, -1);
    
   
    
    } else {
    
    
    if (output === "" && specialChars.includes (btnValue)) return;
    
     output += btnValue;
    
    }
    
   display.value = output;
    
  };
    
buttons.foreach((button)=>{
  addEventListener(click,(e)=> console.log(e.target.dataset.value))
});
